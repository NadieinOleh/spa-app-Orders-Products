const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();

app.use(cors());

const server = http.createServer(app);
const io = socketIo(server);

let activeSessions = 0;

io.on('connection', (socket) => {
  socket.on('updateActiveSessions', () => {
    activeSessions++;

    io.emit('updateActiveSessions', activeSessions);
  });

  socket.on('disconnect', () => {
    activeSessions--;


    io.emit('updateActiveSessions', activeSessions);
  });
});

server.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});

