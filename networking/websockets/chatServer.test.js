import { WebSocket } from 'ws';
import { createServer } from './chat.js';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

describe('Chat WebSocket Server', () => {
  let server, port;

  beforeEach(async () => {
    port = 9000 + Math.floor(Math.random() * 1000);
    server = createServer(port);
    await wait(100); // give it time to start
  });

  afterEach(async () => {
    await new Promise((resolve) => server.wss.close(resolve));
  });

  test('broadcasts join and updates user list', async () => {
    const client1 = new WebSocket(`ws://localhost:${port}`);
    const messages = [];

    client1.on('message', (data) => messages.push(JSON.parse(data)));

    await new Promise((r) => client1.once('open', r));
    client1.send(JSON.stringify({ type: 'join', username: 'Dom' }));

    await wait(100);

    expect(messages.some(m => m.text?.includes('🟢 Dom joined.'))).toBe(true);
    expect(messages.some(m => m.type === 'userlist')).toBe(true);

    client1.close();
  });

  test('broadcasts messages between clients', async () => {
    const c1 = new WebSocket(`ws://localhost:${port}`);
    const c2 = new WebSocket(`ws://localhost:${port}`);
    const received = [];

    await Promise.all([
      new Promise((r) => c1.once('open', r)),
      new Promise((r) => c2.once('open', r))
    ]);

    c2.on('message', (data) => received.push(JSON.parse(data)));
    c1.send(JSON.stringify({ type: 'join', username: 'Dom' }));
    c2.send(JSON.stringify({ type: 'join', username: 'Brooks' }));

    await wait(100);
    c1.send(JSON.stringify({ type: 'message', text: 'Hello world!' }));

    await wait(100);

    expect(received.some(m => m.text === 'Hello world!')).toBe(true);

    c1.close(); c2.close();
  });
});
