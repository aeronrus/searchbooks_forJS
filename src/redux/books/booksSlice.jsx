import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'loading',
  totalItems: 0,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (params) => {
  const { searchValue, startIndex } = params;
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=` +
      searchValue +
      `&key=AIzaSyCmncm - PfZWBDFTmOBluAQaWct7Dfl76Io&maxResults=30&startIndex=` +
      startIndex,
  );
  return data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
    setBooksNull(state) {
      state.books = [];
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = 'loading';
      state.books = [];
      state.totalItems = 0;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.books.push(...action.payload.items);
      state.totalItems = action.payload.totalItems;
    },
    [fetchBooks.rejected]: (state) => {
      state.status = 'error';
      state.books = [];
      state.totalItems = 0;
    },
  },
});

export const { setBooks, setBooksNull } = booksSlice.actions;
export const selectBooks = (state) => state.book;
export default booksSlice.reducer;
