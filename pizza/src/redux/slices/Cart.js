import { createSlice } from '@reduxjs/toolkit';
import cons from './cons';

const initialState = {
  Items: [],
  totalPrice: 0
};

const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddItems: (state, action) => {
      const findItems = state.Items.find(obj => obj.id === action.payload.id);
      if (findItems) {
        findItems.count++;
      } else {
        state.Items.push({
          ...action.payload,
          count: 1
        });
      }
      state.totalPrice = state.Items.reduce((acc, obj) => {
        return obj.price * obj.count + acc;
      }, 0);
    },
    ReduceCount: (state, action) => {
      const find = state.Items.find(obj => {
        return obj.id === action.payload.id;
      });
      if (find && find.count > 0) {
        find.count--;
      }
      state.totalPrice = state.Items.reduce((acc, obj) => {
        return obj.price * obj.count + acc;
      }, 0);
    },
    AddCount: (state, action) => {
      const find = state.Items.find(obj => {
        return obj.id === action.payload.id;
      });
      if (find) {
        find.count++;
      }
      state.totalPrice = state.Items.reduce((acc, obj) => {
        return obj.price * obj.count + acc;
      }, 0);
    },

    RemoveItems: (state, actions) => {
      state.Items = state.Items.filter(obj => {
        return obj.id !== actions.payload.id;
      });
      state.totalPrice = state.totalPrice - actions.payload.price * actions.payload.count;
    },
    ClearCart: (state, actions) => {
      state.Items = [];
      state.totalPrice = 0;
    }
  }
});
export const { AddItems, ReduceCount, AddCount, RemoveItems, ClearCart } = CartSlice.actions;

export default CartSlice.reducer;
