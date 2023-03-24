import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'notices',
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
  tagTypes: [
    'serched',
    'sell',
    'lost-found',
    'for-free',
    'current',
    'favorite',
    'own',
  ],
  endpoints: builder => ({
    getNoticesByCategory: builder.query({
      query: noticesCategory => `/notices/category/${noticesCategory}`,
      providesTags: (result, error, arg) => [arg],
    }),
    getNoticesBySearch: builder.query({
      query: (searchQuery, searchParams) =>
        `/notices/category/${searchQuery}?${searchParams}`,
      providesTags: ['serched'],
    }),
    getNoticesById: builder.query({
      query: id => `/notices/${id}`,
      providesTags: ['current'],
    }),
    addFavoriteNotice: builder.mutation({
      query: id => ({
        url: `notices/favorite/${id}`,
        method: 'POST',
        // body: notice,
      }),
      invalidatesTags: ['favorite'],
    }),
    deleteFavoriteNotice: builder.mutation({
      query: id => ({
        url: `notices/favorite`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['favorite'],
    }),
    addNotice: builder.mutation({
      query: notice => ({
        url: `notices/notice`,
        method: 'POST',
        body: notice,
      }),
      invalidatesTags: ['own'],
    }),
    deleteNotice: builder.mutation({
      query: id => ({
        url: `notices/notice/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['own'],
    }),
  }),
});

export const {
  useGetNoticesBySearchQuery,
  useGetNoticesByCategoryQuery,
  useGetNoticesByIdQuery,
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
  useAddNoticeMutation,
  useDeleteNoticeMutation,
} = noticesApi;
