const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/');

const messagesData = new Map();
const usersData = new Map();
const userName = ['Abigail', 'Tabitha', 'Alec', 'Alex',	'Alexander',	'Addie', 'Alec', 'Alex',	'Alexander',	'Addie'];



io.on('connection', (socket) => {

  const newUser = {
    socketId: socket.id,
    name: `user-${userName[Math.floor(Math.random() * 10)]}`
  }

  usersData.set(newUser.socketId, {...newUser});

  socket.on("MESSAGE_SEND", (data) => {
    messagesData.set(data.id, {...data});
    socket.emit("MESSAGE_NEW", data);
    socket.broadcast.emit("MESSAGE_NEW", data);
  });
});
server.listen(3001, () => {
  console.log('listening on *:3001');
});
