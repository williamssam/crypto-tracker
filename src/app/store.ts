import {configureStore} from '@reduxjs/toolkit';
import {coinApi} from '../feature/apiSlice';

export const store = configureStore({
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(coinApi.middleware),
});
