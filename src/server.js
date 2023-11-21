const { nanoid } = require("nanoid");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/");

io.on("connection", (socket) => {
  let user = {};

  socket.on("USER_JOIN", (data) => {
    user = {...data}
    socket.join(user.room);
  });

  socket.on('USER_TYPING', (data) => {
    if(data.typing) {
      socket.broadcast.emit('USER_TYPING', data.name);
    } else {
      socket.broadcast.emit('USER_TYPING', null);
    }
  });

  socket.on("USER_LEAVE", (data) => {
    socket.leave(data);
  });

  socket.on("MESSAGE", (data) => {
    data = {
      id: nanoid(8),
      authId: user.id,
      avatar: user.avatar,
      authName: user.name,
      text: data.value,
      image: data.image,
      date: `${new Date().getHours()} : ${
        new Date().getMinutes() < 10
          ? `0${new Date().getMinutes()}`
          : new Date().getMinutes()
      }`,
    };

    io.to(user.room).emit("MESSAGE", data);
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
