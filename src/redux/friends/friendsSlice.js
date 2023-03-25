import { createSlice } from '@reduxjs/toolkit';
import fetchFriends from './operations';

const friendsInitialState = {
  friends: [],
  isLoading: false,
  error: null,
};

// const onFetchSuccessReducer = (state, action) => {
//   state.friends = action.payload;
//   state.isLoading = false;
//   state.error = null;
// };
// const onPendingReducer = state => {
//   state.isLoading = true;
// };
// const onRejectedReducer = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const friendsSlice = createSlice({
//   name: 'friends',
//   initialState: friendsInitialState,
//   reducers: builder =>
//     builder
//       .addCase(fetchFriends.fulfilled, onFetchSuccessReducer)
//       .addCase(fetchFriends.pending, onPendingReducer)
//       .addCase(fetchFriends.rejected, onRejectedReducer),
// });

const friendsSlice = createSlice({
  name: 'friends',
  initialState: friendsInitialState,
  extrareducers: {
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

//  default friendsReducer;
