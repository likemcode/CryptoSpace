import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': '21a1ffb710msh17798960304fcc1p1f691ajsn7d3f7c362914',
  'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
};
const baseUrl = 'https://crypto-news16.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }), // Use the baseUrl variable here
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (count) => createRequest(`/news/top/${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
