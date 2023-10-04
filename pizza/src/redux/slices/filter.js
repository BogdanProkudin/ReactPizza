import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countPage: 1,
  categoryId: 0,
  sort: { name: 'популярности', sortProperty: 'rating' }
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, actions) {
      state.categoryId = actions.payload;
    },
    setSortId(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.countPage = action.payload;
    }
  }
});

export const selectSort = state => state.filter.sort;
export const { setCategoryId, setSortId, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
