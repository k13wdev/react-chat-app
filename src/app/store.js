import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from '../feature/messages/messagesSlice';

export const store = configureStore({
  reducer: {
    messages: messagesSlice
  },
})