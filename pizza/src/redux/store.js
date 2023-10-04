import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter';
import Cart from './slices/Cart';
import Pizzas from './slices/Pizzas';
export const store = configureStore({
  reducer: { filter, Cart, Pizzas }
});
