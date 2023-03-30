import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import filterSlice from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    book: booksReducer,
    filter: filterSlice,
  },
});

export default store;
