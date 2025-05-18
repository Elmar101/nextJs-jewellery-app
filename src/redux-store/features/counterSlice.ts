import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  count: number;
}
const initialState: IState = { count: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: IState) => {
      state.count++;
    },
    decrement: (state: IState) => {
      state.count--;
    },
    reset: state => {
      state.count = initialState.count;
    },
    incrementByAmount: (state: IState, action: PayloadAction<IState['count']>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
