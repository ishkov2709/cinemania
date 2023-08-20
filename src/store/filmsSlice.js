import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { fetchFilmActors, fetchFilmById, fetchPagination, fetchTrendFilms } from './operations';

const handleFetchFilmsPending = state => {
  state.isLoading = true;
  state.pagination.page = null;
  state.pagination.totalPages = null;
  state.pagination.isPaginated = false;
  state.error = null;
  state.fetchUrl = null;
  state.pagination.page = null;
  state.pagination.totalPages = null;
  state.filmDetails = null;
  state.filmActors = null;
};

const handleFetchFilmsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.pagination.page = 1;
  state.arrayFilms = payload.results;
  state.fetchUrl = payload.fetchUrl;
  state.pagination.page = payload.page;
  state.pagination.totalPages = payload.total_pages;
  state.lastFetch = payload.lastFetch;
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

const handleFetchPaginationPending = state => {
  state.isLoading = true;
  state.arrayFilms = null;
};

const handleFetchPaginationFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.arrayFilms = payload.results;
};

const handleFetchPaginationRejected = (state, { payload }) => {
  state.isLoading = false;
  state.pagination.page = null;
  state.pagination.totalPages = null;
  state.pagination.isPaginated = false;
  state.error = payload;
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.pagination.isPaginated = true;
      state.pagination.page += payload;
    },
    decrement: (state, { payload }) => {
      state.pagination.isPaginated = true;
      state.pagination.page -= payload;
    },
  },
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
      .addCase(fetchFilmActors.rejected, handleFetchFilmActorsRejected)
      .addCase(fetchPagination.pending, handleFetchPaginationPending)
      .addCase(fetchPagination.fulfilled, handleFetchPaginationFulfilled)
      .addCase(fetchPagination.rejected, handleFetchPaginationRejected);
  },
});

export const filmsReducer = filmsSlice.reducer;

export const { increment, decrement } = filmsSlice.actions;
