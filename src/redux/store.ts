import { combineReducers, configureStore } from '@reduxjs/toolkit';

import moneyReducer from './moneySlice';
import orderReducer from './orderSlice';

const reducer = combineReducers({
  money: moneyReducer,
  orders: orderReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const selectMoney = (state: RootState) => state.money.money;
export const selectOrders = (state: RootState) => state.orders.orders;
