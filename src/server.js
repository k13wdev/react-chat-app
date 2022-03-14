const { nanoid } = require("nanoid");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/");

const usersData = new Map();
const channel = {
  id: nanoid(8),
  name: "CHANNEL",
  users: new Map(),
};

io.on("connection", (socket) => {
  let user = {};

  socket.on("USER_JOIN", (data) => {
    user = {
      ...data,
      id: socket.id,
    };
    usersData.set(user.id, { ...user });
    socket.join(data.room);
    channel.users.set(user.id, { ...user });
  });

  socket.on("USER_LEAVE", (data) => {
    socket.leave(data);
    channel.users.delete(socket.id);
  });

  socket.on("MESSAGE", (data) => {
    const user = usersData.get(socket.id);

    data = {
      ...data,
      id: nanoid(8),
      socketId: user.id,
      auth: user.name,
      avatar: user.avatar,
      date: `${new Date().getHours()} : ${
        new Date().getMinutes() < 10
          ? `0${new Date().getMinutes()}`
          : new Date().getMinutes()
      }`,

    };

    io.to(channel.name).emit("MESSAGE", data);
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
