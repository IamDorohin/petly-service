import { createSlice } from '@reduxjs/toolkit';
import fetchFriends from './operations';

const friendsInitialState = {
  friends: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: friendsInitialState,
  extraReducers: {
    [fetchFriends.pending](state) {
      state.isLoading = true;
    },
    [fetchFriends.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.friends = action.payload;
    },
    [fetchFriends.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const friendsReducer = friendsSlice.reducer;
