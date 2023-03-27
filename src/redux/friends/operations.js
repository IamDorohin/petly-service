import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchFriends = createAsyncThunk(
  'friends/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://petly-service-backend.onrender.com/api/our_friends`
      );
      console.log(response.data.data.result);
      return response.data.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export default fetchFriends;
