import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    number: 0,
  },
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
