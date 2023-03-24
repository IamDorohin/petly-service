// import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { noticesApi } from './notices/noticesSlice';

export const store = configureStore({
  reducer: {
    [noticesApi.reducerPath]: noticesApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    noticesApi.middleware,
    // logger,
  ],
});
