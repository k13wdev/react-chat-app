import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from "./app/store";
import { Provider } from "react-redux";
import { SocketContext, socket } from "./app/context";

ReactDOM.render(
  <React.StrictMode>
    {/* <SocketContext.Provider value={socket}> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </SocketContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
