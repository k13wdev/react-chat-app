import { io } from "socket.io-client";
import { ADD_USER_ID } from "../feature/users/userSlice";




export function socketMiddleware() {
  const socket = io();
  return ({dispatch}) => {
    dispatch(ADD_USER_ID(socket.id))
    socket.on("MESSAGE", (data) => {
      dispatch({
        type: "SOCKET/MESSAGE",
        payload: data,
      });
    });
    return (next) =>(action) => {
      if (action.type === "SOCKET/MESSAGE") {
        socket.emit("MESSAGE", action.payload);
      }
      return next(action);
    };
  }
};
