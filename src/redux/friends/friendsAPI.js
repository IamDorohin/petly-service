// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const FriendsAPI = createApi({
//   reducerPath: 'FriendsAPI',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://petly-service-backend.onrender.com/api',
//     // prepareHeaders: (headers, { getState }) => {
//     //   const token = getState().auth.token;
//     //   if (token) {
//     //     headers.set('authorization', `Bearer ${token}`);
//     //   }
//     //   return headers;
//     // },
//   }),
//   tagTypes: ['News'],
//   endpoints: builder => ({
//     getNews: builder.query({
//       query: () => '/our_friends',
//       providesTags: ['Friends'],
//     }),
//   }),
// });

// export const { useGetFriendsQuery } = FriendsAPI;
