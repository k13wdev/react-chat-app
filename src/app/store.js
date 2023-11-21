import { configureStore } from '@reduxjs/toolkit';
import socketSlice from '../feature/socket/socketSlice';
import userSlice from '../feature/users/userSlice';
import { socketMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    socket: socketSlice,
    user: userSlice
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware()),
})