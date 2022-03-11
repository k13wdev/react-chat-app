import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from '../feature/messages/messagesSlice';
import userSlice from '../feature/users/userSlice';

export const store = configureStore({
  reducer: {
    messages: messagesSlice,
    user: userSlice
  },
})