import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCartItem } from '../types/customTypes';

import { RootState } from './store';

interface InitialState {
  orders: TCartItem[];
}

const initialState: InitialState = {
  orders: [],
};

export const orderReducer = createSlice({
  initialState,
  name: 'orders',
  reducers: {
    addOrder: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.orders = [...state.orders, action.payload];
    },

    removeOrder: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const newArray = state.orders.filter((item) => item.id !== action.payload.id);
      state.orders = newArray;
    },
  },
});

export const { addOrder, removeOrder } = orderReducer.actions;
export default orderReducer.reducer;

export const selectOrders = (state: RootState) => state.orders.orders;
