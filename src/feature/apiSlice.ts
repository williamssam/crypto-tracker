import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {COIN_GECKO_BASE} from '../constants/urls';

export const coinApi = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    coinMarket: builder.query({
      query: currency =>
        `${COIN_GECKO_BASE}markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    }),
  }),
});

export const {useCoinMarketQuery} = coinApi;
