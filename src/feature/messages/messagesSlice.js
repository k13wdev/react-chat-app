import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  messagesArr: [],
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    pushMessage: (state, action) => {
      state.messagesArr.push(action.payload)
    }
  },
})


export const { pushMessage } = messagesSlice.actions;

export default messagesSlice.reducer;