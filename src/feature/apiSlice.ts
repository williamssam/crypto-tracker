import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const coinApi = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    // coinMarket: builder.query({
    //   query: currency =>
    //     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    // }),
  }),
});

// export const {useCoinMarketQuery} = coinApi;
