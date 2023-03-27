import axios from 'axios';

axios.defaults.baseURL = 'https://petly-service-backend.onrender.com/api';

export const getOurFriends = async token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axios.get(`/our_friends`);
  return response.data;
};

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
