const { nanoid } = require('nanoid');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/');

const messagesData = new Map();
const usersData = new Map();
const channel = {
  id: nanoid(8),
  name: "CHANNEL",
  users: new Map()
};

io.on('connection', (socket) => {
  let user = {};

  socket.on("USER_JOIN", (data) => {
    user = {
      ...data,
      id: socket.id,
    };
    usersData.set(user.id, {...user});
    socket.join(data.room);
    channel.users.set(user.id, {...user});
    console.log('user', socket.id, 'connect to', user.room,  channel.users);
  });

  socket.on("USER_LEAVE", (data) => {
    socket.leave(data);
    channel.users.delete(socket.id)
    console.log('user', socket.id, 'leave from', user.room,  channel.users);
  });

  socket.on('disconnect', () => {

  });

  socket.on("MESSAGE_SEND", (data) => {
    const user = usersData.get(socket.id);
    data = {
      ...data,
      id: nanoid(8),
      socketId: user.id,
      auth: user.name,
      avatar: user.avatar,
      date: `${new Date().getHours()} : ${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`,
    };
    messagesData.set(data.id, {...data});
    io.to(channel.name).emit('MESSAGE_NEW', data);
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});
