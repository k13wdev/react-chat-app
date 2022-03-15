import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messagesArr: [],
  typing: ``
};

export const socketSlice = createSlice({
  name: "SOCKET",
  initialState,
  reducers: {
    MESSAGE: (state, action) => {
      state.messagesArr.push(action.payload);
    },
    USER_TYPING: (state, action) => {
      state.typing = action.payload ? `${action.payload} typing now ...` : null
    },
  },
});
export const { MESSAGE } = socketSlice.actions;
export default socketSlice.reducer;
