import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { fetchTrendFilms } from './operations';

const handleFetchFilmsPending = state => {
  state.isLoading = true;
  state.error = null;
  state.fetchUrl = null;
  state.pagination.page = null;
  state.pagination.totalPages = null;
};

const handleFetchFilmsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.trendFilms = payload.res.results;
  state.fetchUrl = payload.fetchUrl;
  state.pagination.page = payload.res.page;
  state.pagination.totalPages = payload.res.total_pages;
};

const handleFetchFilmsRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTrendFilms.pending, handleFetchFilmsPending)
      .addCase(fetchTrendFilms.fulfilled, handleFetchFilmsFulfilled)
      .addCase(fetchTrendFilms.rejected, handleFetchFilmsRejected);
  },
});

export const filmsReducer = filmsSlice.reducer;
