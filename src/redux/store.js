import { configureStore } from '@reduxjs/toolkit';
import { noticesApi } from './notices/noticesSlice';
import { NewsAPI } from './news/NewsAPI';

export const store = configureStore({
  reducer: {
    [noticesApi.reducerPath]: noticesApi.reducer,
    [NewsAPI.reducerPath]: NewsAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    noticesApi.middleware,
    NewsAPI.middleware,
  ],
});
