import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  money: number;
}

const initialState: InitialState = {
  money: 0,
};

export const moneySlicer = createSlice({
  initialState,
  name: 'money',
  reducers: {
    deposit: (state, action: PayloadAction<number>) => {
      state.money += action.payload;
    },
    withdraw: (state, action: PayloadAction<number>) => {
      state.money -= action.payload;
    },
  },
});

export const { deposit, withdraw } = moneySlicer.actions;
export default moneySlicer.reducer;
