import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

interface CoinType {
  coin: [];
}

const initialState: CoinType = {
  coin: [],
};

export const coinSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCoinData: (state, action) => {
      state.coin = action.payload;
    },
  },
});

export const {setCoinData} = coinSlice.actions;
export const coinDetails = (state: RootState) => state.crypto;
export default coinSlice.reducer;
