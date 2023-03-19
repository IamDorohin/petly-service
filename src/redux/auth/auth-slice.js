import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateUser,
  updateUserAvatar,
} from './auth-operations';

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const initialState = {
  token: null,
  user: {},
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(register.fulfilled, (state, _) => {
        state.isRefreshing = false;
      })
      .addCase(register.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(logIn.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(logOut.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = {};
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchCurrentUser.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(updateUser.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = { ...state.user, ...payload };
      })
      .addCase(updateUser.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(updateUserAvatar.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(updateUserAvatar.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = { ...state.user, ...payload };
      })
      .addCase(updateUserAvatar.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
