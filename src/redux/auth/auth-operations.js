import * as api from '../../services/api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMUI } from 'shared/Alert';

// -----
// POST @ /users/sinup
// body: {name, email, password}
//  When registration is successful => add token to HTTP-header
// -----
//credentials => name, e-mail, password

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await api.register(credentials);

      return data;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
      // console.log('Error while creating user', error);
    }
  }
);

//  -----
// POST @ /users/login
// body: {email, password}
// When login is successful => add token to HTTP-header
// -----

//credentials => e-mail, password

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await api.login(credentials);
      return data;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
      // console.log('Error while user is login', error);
    }
  }
);

//  -----
// POST @ /users/logout
// headers: Authorization: Bearer token
// When logout is successful => remove token from HTTP-header
// -----

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      errorMUI('Something went wrong, please try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
      // console.log('Error while user is logout', error);
    }
  }
);

//  -----
// GET @ /users/current
// header: Authorization: Bearer token
// (1. get token via getState(); 2. when there is no token => go out  without performing
// any operations; 3. when there is token => add token in HTTP-header and perform operation)
// -----

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const persistedToken = auth.token;

      if (!persistedToken) {
        rejectWithValue('Unable to fetch user');
      }

      const { data } = await api.fetchCurrentUser(persistedToken);
      return data;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (credentials, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const persistedToken = auth.token;

      if (!persistedToken) {
        rejectWithValue('Unable update user');
      }

      const data = await api.updateUserData(credentials);
      return data;
    } catch ({ response }) {
      errorMUI('Something went wrong, try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/avatar',
  async (avatar, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const persistedToken = auth.token;

      if (!persistedToken) {
        rejectWithValue('Unable update avatar');
      }

      const data = await api.updateUserAvatar(avatar);
      return data;
    } catch ({ response }) {
      errorMUI('Something went wrong, try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
