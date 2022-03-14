import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  messagesArr: [],
}

export const socketSlice = createSlice({
  name: 'SOCKET',
  initialState,
  reducers: {
    MESSAGE: (state, action) => {
      console.log(action);
      state.messagesArr.push(action.payload)
    }
  },
})

export const { MESSAGE } = socketSlice.actions;
export default socketSlice.reducer;