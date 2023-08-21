import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from './initialState';
import {
  fetchFilmActors,
  fetchFilmById,
  fetchPagination,
  fetchPopularFilms,
  fetchSearchQuery,
  fetchTopRatedFilms,
  fetchTrendFilms,
  fetchUpcomingFilms,
} from './operations';

const handleFetchFilmsPending = state => {
  state.isLoading = true;
  state.pagination.page = null;
  state.pagination.totalPages = null;
  state.pagination.isPaginated = false;
  state.lastFetch = null;
  state.error = null;
  state.fetchUrl = null;
  state.pagination.page = null;
  state.pagination.totalPages = null;
  state.filmDetails = null;
  state.filmActors = null;
  state.search = null;
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
  state.pagination.isPaginated = false;
  state.arrayFilms = payload.results;
};

const handleFetchPaginationRejected = (state, { payload }) => {
  state.isLoading = false;
  state.pagination.page = null;
  state.pagination.totalPages = null;
  state.pagination.isPaginated = false;
  state.error = payload;
};

const handleFetchSearchQueryPending = state => {
  state.isLoading = true;
  state.pagination.page = null;
  state.pagination.totalPages = null;
  state.pagination.isPaginated = false;
  state.lastFetch = null;
  state.error = null;
  state.fetchUrl = null;
  state.pagination.page = null;
  state.pagination.totalPages = null;
  state.filmDetails = null;
  state.filmActors = null;
};

const handleFetchSearchQueryFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.pagination.page = 1;
  state.arrayFilms = payload.results;
  state.fetchUrl = payload.fetchUrl;
  state.pagination.page = payload.page;
  state.pagination.totalPages = payload.total_pages;
  state.lastFetch = payload.lastFetch;
};

const handleFetchSearchQueryRejected = (state, { payload }) => {
  state.isLoading = false;
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
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFilmById.pending, handleFetchFimByIdPending)
      .addCase(fetchFilmById.fulfilled, handleFetchFimByIdFulfilled)
      .addCase(fetchFilmById.rejected, handleFetchFimByIdRejected)
      .addCase(fetchFilmActors.pending, handleFetchFilmActorsPending)
      .addCase(fetchFilmActors.fulfilled, handleFetchFilmActorsFulfilled)
      .addCase(fetchFilmActors.rejected, handleFetchFilmActorsRejected)
      .addCase(fetchPagination.pending, handleFetchPaginationPending)
      .addCase(fetchPagination.fulfilled, handleFetchPaginationFulfilled)
      .addCase(fetchPagination.rejected, handleFetchPaginationRejected)
      .addCase(fetchSearchQuery.pending, handleFetchSearchQueryPending)
      .addCase(fetchSearchQuery.fulfilled, handleFetchSearchQueryFulfilled)
      .addCase(fetchSearchQuery.rejected, handleFetchSearchQueryRejected)
      .addMatcher(
        isAnyOf(
          fetchTrendFilms.pending,
          fetchPopularFilms.pending,
          fetchTopRatedFilms.pending,
          fetchUpcomingFilms.pending
        ),
        handleFetchFilmsPending
      )
      .addMatcher(
        isAnyOf(
          fetchTrendFilms.fulfilled,
          fetchPopularFilms.fulfilled,
          fetchTopRatedFilms.fulfilled,
          fetchUpcomingFilms.fulfilled
        ),
        handleFetchFilmsFulfilled
      )
      .addMatcher(
        isAnyOf(
          fetchTrendFilms.rejected,
          fetchPopularFilms.rejected,
          fetchTopRatedFilms.rejected,
          fetchUpcomingFilms.rejected
        ),
        handleFetchFilmsRejected
      );
  },
});

export const filmsReducer = filmsSlice.reducer;

export const { increment, decrement, setSearch } = filmsSlice.actions;
