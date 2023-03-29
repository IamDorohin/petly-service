import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, updateUser } from './auth-operations';

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
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
      .addCase(updateUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = { ...state.user, ...payload.data.data.user };
        state.isLoggedIn = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
