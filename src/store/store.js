// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import jsonReducer from './json';

const store = configureStore({
  reducer: {
    json: jsonReducer,
  },
});

export default store;
