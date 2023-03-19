import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchFriends = createAsyncThunk(
  'ourFriends/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('data/sponsors.json');
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchFriends;
