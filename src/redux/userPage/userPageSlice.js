import { createSlice } from '@reduxjs/toolkit';

import {
  userLogOut,
  fetchUserPets,
  patchContact,
  addPet,
  removePetCard,
} from './userPageOperations.js';

const petsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const petSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,

  extraReducers: {
    [fetchUserPets.pending](store) {
      store.isLoading = true;
      store.error = null;
    },
    [fetchUserPets.fulfilled]: (store, { payload }) => {
      store.items = payload;
      store.isLoading = false;
    },
    [fetchUserPets.rejected]: (store, { error }) => {
      store.isLoading = false;
      store.error = error;
    },
    [patchContact.pending](store) {
      store.isLoading = true;
      store.error = null;
    },
    [patchContact.fulfilled](store, { payload }) {
      store.isLoading = false;
    },
    [patchContact.rejected](store, error) {
      store.isLoading = false;
      store.error = error;
    },
    [removePetCard.pending](store) {
      store.isLoading = true;
    },
    [removePetCard.fulfilled](store, { payload }) {
      store.isLoading = false;
      store.items = store.items.filter(item => item._id !== payload);
    },
    [removePetCard.rejected](store, error) {
      store.isLoading = false;
      store.error = error;
    },
    [userLogOut.fulfilled](store) {
      store.body = { name: null, email: null, password: null };
      store.token = null;
      store.isLoggedIn = false;
    },
    [addPet.pending](state) {
      state.isLoading = true;
    },
    [addPet.fulfilled](state, { payload }) {
      state.items.push(payload);
      state.isLoading = false;
      state.error = null;
    },
    [addPet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const userPetsReducer = petSlice.reducer;
