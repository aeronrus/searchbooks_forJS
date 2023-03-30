import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'loading',
  totalItems: 0,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (params) => {
  const { searchValue, categories, categoryId, sorts, sortId } = params;
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=` +
      searchValue +
      `+subject:` +
      categories[categoryId] +
      `&orderBy=` +
      sorts[sortId] +
      `&key=AIzaSyCmncm - PfZWBDFTmOBluAQaWct7Dfl76Io`,
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
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = 'loading';
      state.books = [];
      state.totalItems = 0;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.books = action.payload.items;
      state.totalItems = action.payload.totalItems;
    },
    [fetchBooks.rejected]: (state) => {
      state.status = 'error';
      state.books = [];
      state.totalItems = 0;
    },
  },
});

export const { setBooks } = booksSlice.actions;
export const selectBooks = (state) => state.book;
export default booksSlice.reducer;
