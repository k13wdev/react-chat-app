import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  user: {},
  loading: 'idle'
}

export const fetchUser = createAsyncThunk(
  'fetchUser',
  async () => {
    const fetchData = await fetch(`https://spapi.dev/api/characters/${Math.floor(Math.random() * 10 + 1)}`)
    const response = await fetchData.json()
    return response.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.user = {id: nanoid(8), name: action.payload.name, avatar: `https://starwars-visualguide.com/assets/img/characters/${action.payload.id}.jpg`, room: 'CHANNEL'};
      })
  },
});

export const {ADD_USER_ID} = userSlice.actions;

export default userSlice.reducer;
