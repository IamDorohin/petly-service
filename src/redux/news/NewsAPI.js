import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const NewsAPI = createApi({
  reducerPath: 'NewsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://petly-service-backend.onrender.com/api',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
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
