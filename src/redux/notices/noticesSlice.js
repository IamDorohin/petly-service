import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'notices',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['sell', 'lost-found', 'for-free', 'favorite', 'own'],
  endpoints: builder => ({
    // getDefaultNotices: builder.query({
    //   query: () => `notices/sell`,
    //   providesTags: ['sell'],
    // }),
    getNoticesByCategory: builder.query({
      query: noticesCategory => `notices/${noticesCategory}`,
      providesTags: (result, error, { noticesCategory }) => [noticesCategory],
    }),
    addFavoriteNotice: builder.mutation({
      query: notice => ({
        url: `notices/favoriteads`,
        method: 'POST',
        body: notice,
      }),
      invalidatesTags: ['favoriteads'],
    }),
    deleteFavoriteNotice: builder.mutation({
      query: id => ({
        url: `notices/favoriteads`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['favoriteads'],
    }),
    addNotice: builder.mutation({
      query: notice => ({
        url: ``,
        method: 'POST',
        body: notice,
      }),
      invalidatesTags: ['myads'],
    }),
    deleteNotice: builder.mutation({
      query: id => ({
        url: `notices/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['myads'],
    }),
  }),
});

export const {
  // useGetDefaultNoticesQuery,
  useGetNoticesByCategoryQuery,
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
  useAddNoticeMutation,
  useDeleteNoticeMutation,
} = noticesApi;

// For commponent

// const {data, error, isFetching, isError} = useGetDefaultNoticesQuery();
// const submitHandler = async() => {
// const { data, error, isLoading } = await useGetNoticesByCategoryQuery(categoryValue, {
//     skip: categoryValue === '',
// });
// }

// const [addNotice] = useAddNoticeMutation();
// const newAdHandler = async notice => {
//   try {
//     await addNotice(notice);
//     success notification
//   } catch (error) {
//     error notification
//   }
// }

// In notice card component
// const [deleteNotice] = useDeleteNoticeMutation();
// Add deleteNotice in onClick button
