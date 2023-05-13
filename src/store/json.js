// store/json.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const jsonSlice = createSlice({
  name: 'json',
  initialState,
  reducers: {
    setJson(state, action) {
      return action.payload;
    },
  },
});

export const { setJson } = jsonSlice.actions;

export default jsonSlice.reducer;
