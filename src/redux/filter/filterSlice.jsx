import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortId: 0,
  itemsCount: 0,
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
    setItemsCount(state, action) {
      state.itemsCount = state.itemsCount + action.payload;
    },
    setItemsCountNull(state, action) {
      state.itemsCount = action.payload;
    },
  },
});

export const { setCategoryId, setSortId, setItemsCount, setItemsCountNull } = filterSlice.actions;
export default filterSlice.reducer;
export const selectFilter = (state) => state.filter;
