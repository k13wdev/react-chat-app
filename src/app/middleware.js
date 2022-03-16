import { io } from "socket.io-client";

const messages = ['MESSAGE', 'USER_TYPING']

export const socketMiddleware = () => {
  return ({ dispatch }) => {
    let socket = io();
    messages.forEach(message => socket.on(message, (data) => {dispatch({type: `SOCKET/${message}`, payload: data})}))
    
    return (next) => {
      return (action) => {        
        switch (action.type) {
          case "SOCKET/USER_JOIN":
            socket.emit("USER_JOIN", action.payload);
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
