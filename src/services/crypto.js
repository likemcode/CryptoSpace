import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API service
export const cryptoDescriptionApi = createApi({
  reducerPath: 'cryptoDescriptionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
  endpoints: (builder) => ({
    getCoinsList: builder.query({
      query: () => 'coins/list',
    }),
    getCoinDetails: builder.query({
      query: (coinId) => `coins/${coinId}`,
    }),
    getExchanges: builder.query({
      query: () => `exchanges`,
    }),
  }),
});

// Export the hooks
export const { useGetCoinsListQuery, useGetCoinDetailsQuery, useGetExchangesQuery } = cryptoDescriptionApi;