import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'notices',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['Notices'],
  endpoints: builder => ({
    getDefaultNotices: builder.query({
      query: () => `notices/sell`,
      providesTags: ['Notices'],
    }),
    getNoticesByCategory: builder.query({
      query: noticesCategory => `notices/${noticesCategory}`,
      providesTags: ['Notices'],
    }),
    deleteOwnNoticeById: builder.mutation({
      query: noticesCategory => `notices/${noticesCategory}`,
      providesTags: ['Notices'],
    }),
  }),
});

export const { useGetDefaultNoticesQuery, useGetNoticesByCategoryQuery } =
  noticesApi;

// For commponent
// const {data, error, isFetching, isError} = useGetDefaultNoticesQuery();

// const { data, error, isLoading } = useGetNoticesByCategoryQuery(categoryValue, {
//     skip: categoryValue === '',

// });

// For store.js
// import { noticesApi } from 'redux/nptices/noticesSlice'

// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [pokemonApi.reducerPath]: pokemonApi.reducer,
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(noticesApi.middleware),
// })
