import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./slices.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
