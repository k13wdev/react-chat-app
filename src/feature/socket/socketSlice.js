import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messagesArr: [],
  typing: ``,
  unreadMsg: 0,
};

export const socketSlice = createSlice({
  name: "SOCKET",
  initialState,
  reducers: {
    MESSAGE: (state, action) => {
      state.messagesArr.push(action.payload);
      state.unreadMsg += 1;
    },
    USER_TYPING: (state, action) => {
      state.typing = action.payload ? `${action.payload} typing now ...` : null;
    },
    UN_READ: (state, action) => {
      state.unreadMsg = action.payload || 0;
    }
  },
});
export const { MESSAGE, UN_READ } = socketSlice.actions;
export default socketSlice.reducer;
