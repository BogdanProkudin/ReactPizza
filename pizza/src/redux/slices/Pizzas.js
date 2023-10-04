import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getPizzas = createAsyncThunk('Pizzas/fetchByIdStatus', async param => {
  const { currentPage, categoryId, sortBy } = param;
  const res = await axios.get(
    `https://63ca8fe6d0ab64be2b559299.mockapi.io/items?page=${currentPage}&limit=4&${
      categoryId > 0 ? `category=${categoryId}` : ''
    }&sortBy=${sortBy}`
  );

  return res.data;
});

const initialState = {
  Items: [],
  status: '',
  SearchItems: ''
};

const PizzaSlice = createSlice({
  name: 'Pizzas',
  initialState,
  reducers: {
    addPizzas: (state, actions) => {
      state.Items = actions.payload;
    },
    setSearchItems: (state, action) => {
      state.SearchItems = action.payload;
    }
  },
  extraReducers: {
    [getPizzas.pending]: state => {
      state.status = 'loading';
      state.Items = [];
    },
    [getPizzas.fulfilled]: (state, action) => {
      state.Items = action.payload;
      state.status = 'success';
    },
    [getPizzas.rejected]: state => {
      state.status = 'error';
    }
  }
});
export const getPizzabyId = id => state => state.Cart.Items.find(obj => obj.id === id);
export const { addPizzas, setSearchItems } = PizzaSlice.actions;

export default PizzaSlice.reducer;
