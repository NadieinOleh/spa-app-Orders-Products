const express = require('express');
const socketIO = require('socket.io');

const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let activeSessions = 0;

io.on('connection', (socket) => {
  activeSessions++;

  io.emit('activeSessions', activeSessions);

  socket.on('disconnect', () => {
    // activeSessions--;
    io.emit('activeSessions', activeSessions);
  });
});

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Сервер WebSocket запущен на порту 3000');
});