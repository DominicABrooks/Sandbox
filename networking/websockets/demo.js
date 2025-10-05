// server.js
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8765 });
console.log('WebSocket server running on ws://localhost:8765');

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Echo the message to all connected clients
    for (const client of wss.clients) {
      if (client.readyState === ws.OPEN) {
        client.send(`Echo: ${message}`);
      }
    }
  });

  ws.on('close', () => console.log('Client disconnected'));
});
