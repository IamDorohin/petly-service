import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const NewsAPI = createApi({
  reducerPath: 'NewsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://petly-service-backend.onrender.com',
  }),
  tagTypes: ['News'],
  endpoints: builder => ({
    getNews: builder.query({
      query: () => `/api/news`,
      providesTags: ['News'],
    }),
  }),
});

export const { useGetNewsQuery } = NewsAPI;

// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {

//     [NewsAPI.reducerPath]: NewsAPI.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(NewsAPI.middleware),})
