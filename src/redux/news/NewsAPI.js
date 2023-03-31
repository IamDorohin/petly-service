import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const NewsAPI = createApi({
  reducerPath: 'NewsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://petly-service-backend.onrender.com/api',
  }),
  tagTypes: ['News'],
  endpoints: builder => ({
    getNews: builder.query({
      query: () => '/news',
      providesTags: ['News'],
    }),
  }),
});

export const { useGetNewsQuery } = NewsAPI;
