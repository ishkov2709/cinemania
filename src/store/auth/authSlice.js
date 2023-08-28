import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { fetchUserdata } from './operations';

const handleFetchUserdataFulfilled = (state, { payload }) => {
  state.favFilms = payload.films;
  state.userId = payload.id;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logInSucces: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
      state.isLoggedIn = true;
      state.imageUrl = payload.picture;
      state.error = null;
    },
    logInError: (state, { payload }) => {
      state.email = null;
      state.name = null;
      state.userId = null;
      state.isLoggedIn = false;
      state.imageUrl = null;
      state.error = payload;
    },
    guestAuth: state => {
      state.isLoggedIn = true;
      state.email = 'guest';
      state.name = 'Guest';
      state.favFilms = [];
    },
    logOut: state => {
      state.email = null;
      state.name = null;
      state.userId = null;
      state.favFilms = null;
      state.isLoggedIn = false;
      state.imageUrl = null;
      state.error = null;
    },
    addToFav: (state, { payload }) => {
      state.favFilms.push(payload);
    },
    delAsFav: (state, { payload }) => {
      state.favFilms = [...state.favFilms.filter(el => el.id !== payload)];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserdata.fulfilled, handleFetchUserdataFulfilled);
  },
});

export const authReducer = authSlice.reducer;

export const { logInSucces, logInError, guestAuth, logOut, addToFav, delAsFav } = authSlice.actions;
