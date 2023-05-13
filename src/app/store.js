import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});
