import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { fetchFilmActors, fetchFilmById, fetchTrendFilms } from './operations';

const handleFetchFilmsPending = state => {
  state.isLoading = true;
  state.error = null;
  state.fetchUrl = null;
  state.pagination.page = null;
  state.pagination.totalPages = null;
  state.filmDetails = null;
  state.filmActors = null;
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

const handleFetchFimByIdPending = state => {
  state.isLoading = true;
  state.filmDetails = null;
};

const handleFetchFimByIdFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.filmDetails = payload;
};

const handleFetchFimByIdRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFetchFilmActorsPending = state => {
  state.isLoading = true;
  state.filmActors = null;
};

const handleFetchFilmActorsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.filmActors = payload;
};

const handleFetchFilmActorsRejected = (state, { payload }) => {
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
      .addCase(fetchTrendFilms.rejected, handleFetchFilmsRejected)
      .addCase(fetchFilmById.pending, handleFetchFimByIdPending)
      .addCase(fetchFilmById.fulfilled, handleFetchFimByIdFulfilled)
      .addCase(fetchFilmById.rejected, handleFetchFimByIdRejected)
      .addCase(fetchFilmActors.pending, handleFetchFilmActorsPending)
      .addCase(fetchFilmActors.fulfilled, handleFetchFilmActorsFulfilled)
      .addCase(fetchFilmActors.rejected, handleFetchFilmActorsRejected);
  },
});

export const filmsReducer = filmsSlice.reducer;
