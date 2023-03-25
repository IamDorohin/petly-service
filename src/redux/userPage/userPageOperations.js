import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//! ниже добавить токен, авторизацию
// import { setToken } from 'redux/auth';

axios.defaults.baseURL = 'https://petly-service-backend.onrender.com/api';

export const jsonInstance = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persisterToken = state.user.token;
    if (persisterToken === null) {
      return thunkApi.rejectWithValue();
    }
    try {
      const { data } = await axios.get('/profile');

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const userLogOut = createAsyncThunk(
  'user/userLogOut',
  async (_, thunkApi) => {
    try {
      await axios.post('/user/logout');
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchUserPets = createAsyncThunk(
  `pets/fetchUserPets`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/profile`);
      return data;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const patchContact = createAsyncThunk(
  'user/updateContact',
  async (data, thunkApi) => {
    try {
      //! const state = thunkApi.getState();
      //! const token = state.auth.token;
      //! setToken(token);
      const { result } = await axios.put(`/users/current/update`, data);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addPet = createAsyncThunk(
  'user/addPet',
  async (petsData, thunkApi) => {
    try {
      const { data } = await axios.post('/profile/', petsData);
      return data;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const removePetCard = createAsyncThunk(
  'pet/removePetCard',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/profile/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
