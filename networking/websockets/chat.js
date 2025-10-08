// chatServer.js
import { WebSocketServer } from 'ws';

export function createServer(port = 8765) {
  const wss   = new WebSocketServer({ port });
  const users = new Map();

  function broadcastJSON(obj) {
    const message = JSON.stringify(obj);
    for (const client of wss.clients)
      if (client.readyState === client.OPEN) client.send(message);
  }

  function updateUserList() {
    const userList = Array.from(users.values());
    broadcastJSON({ type: 'userlist', users: userList });
  }

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      let data;
      try {
        data = JSON.parse(message);
      } catch {
        return;
      }

      switch (data.type) {
        case 'join':
          users.set(ws, data.username || 'Anonymous');
          broadcastJSON({ type: 'message', text: `🟢 ${data.username} joined.` });
          updateUserList();
          break;

        case 'message':
          broadcastJSON({ type: 'message', text: data.text });
          break;
      }
    });

    ws.on('close', () => {
      const username = users.get(ws);
      users.delete(ws);
      broadcastJSON({ type: 'message', text: `🔴 ${username || 'A user'} left.` });
      updateUserList();
    });
  });

  return { wss, users, broadcastJSON, updateUserList };
}

if (process.argv[1].endsWith('chatServer.js')) {
  createServer();
  console.log('💬 Chat server running on ws://localhost:8765');
}