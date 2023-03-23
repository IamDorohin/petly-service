import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const NewsAPI = createApi({
  reducerPath: 'NewsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/news`,
      providesTags: ['News'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewsQuery } = NewsAPI;