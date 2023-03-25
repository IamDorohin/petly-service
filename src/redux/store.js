import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { noticesApi } from './notices/noticesSlice';
import { NewsAPI } from './news/NewsAPI';
import { authReducer } from './login-page/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistAuthReducer = persistReducer(
  authPersistConfig,
  authReducer.reducer
);

export const store = configureStore({
  reducer: {
    [noticesApi.reducerPath]: noticesApi.reducer,
    [NewsAPI.reducerPath]: NewsAPI.reducer,
    auth: persistAuthReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    noticesApi.middleware,
    NewsAPI.middleware,
  ],
});

export const persistor = persistStore(store);
