import { configureStore } from '@reduxjs/toolkit';
import { noticesApi } from './notices/noticesSlice';
import { NewsAPI } from './news/NewsAPI';
import { friendsReducer } from './friends/friendsSlice';
import themeReducer from './theme/themeSlice';

export const store = configureStore({
  reducer: {
    [noticesApi.reducerPath]: noticesApi.reducer,
    [NewsAPI.reducerPath]: NewsAPI.reducer,
    friends: friendsReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    noticesApi.middleware,
    NewsAPI.middleware,
  ],
});
