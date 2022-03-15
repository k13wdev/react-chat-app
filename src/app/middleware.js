import { io } from "socket.io-client";

export const socketMiddleware = () => {
  return ({ dispatch }) => {
    let socket = io();
    return (next) => {
      return (action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
          case "SOCKET/USER_JOIN":
            socket.emit("USER_JOIN", action.payload);

            socket.on("MESSAGE", (data) => {
              dispatch({
                type: "SOCKET/MESSAGE",
                payload: data,
              });
            });

            socket.on("USER_TYPING", (data) => {
              dispatch({
                type: "SOCKET/USER_TYPING",
                payload: data
              });
            });

            break;
          case "SOCKET/SEND_MESSAGE":
            socket.emit("MESSAGE", action.payload);
            break;
          case "SOCKET/SEND_USER_TYPING":
            socket.emit("USER_TYPING", action.payload);
            break;
          case "SOCKET/USER_LEAVE":
            socket.emit("USER_LEAVE");
            socket.off("MESSAGE");
            socket.off("USER_TYPING")
            socket.off("USER_JOIN")
            break;
        }

        return next(action);
      };
    };
  };
};
