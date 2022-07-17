import {configureStore} from '@reduxjs/toolkit';
import {coinApi} from '../feature/coinApi';
import coinReducer from '../feature/coinSlice';

export const store = configureStore({
  reducer: {
    crypto: coinReducer,
    [coinApi.reducerPath]: coinApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(coinApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
