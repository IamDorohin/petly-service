import { configureStore } from '@reduxjs/toolkit';
import { noticesApi } from './notices/noticesSlice';
import { NewsAPI } from './news/NewsAPI';
import { friendsReducer } from './friends/friendsSlice';
// import { FriendsAPI } from './friends/friendsAPI';

export const store = configureStore({
  reducer: {
    [noticesApi.reducerPath]: noticesApi.reducer,
    [NewsAPI.reducerPath]: NewsAPI.reducer,
    friends: friendsReducer,
    // [FriendsAPI.reducerPath]: FriendsAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    noticesApi.middleware,
    NewsAPI.middleware,
  ],
});
