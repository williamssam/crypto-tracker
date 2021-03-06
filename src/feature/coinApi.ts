import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {COIN_GECKO_BASE} from '../constants/urls';

export const coinApi = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({baseUrl: COIN_GECKO_BASE}),
  endpoints: builder => ({
    coinMarket: builder.query({
      query: currency =>
        `markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    }),
    coinDetail: builder.query({
      query: id => `${id}`,
    }),
  }),
});

export const {useCoinMarketQuery, useCoinDetailQuery} = coinApi;
