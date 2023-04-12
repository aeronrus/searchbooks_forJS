import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortId: 0,
  startIndex: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortId(state, action) {
      state.sortId = action.payload;
    },
    setStartIndex(state, action) {
      state.startIndex = state.startIndex + action.payload;
    },
    setStartIndexNull(state, action) {
      state.startIndex = action.payload;
    },
  },
});

export const { setCategoryId, setSortId, setStartIndex, setStartIndexNull } = filterSlice.actions;
export default filterSlice.reducer;
export const selectFilter = (state) => state.filter;
