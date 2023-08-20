const initialState = {
  isLoading: false,
  lastFetch: null,
  search: null,
  trendFilms: null,
  arrayFilms: null,
  filmActors: null,
  error: null,
  fetchUrl: null,
  pagination: {
    isPaginated: false,
    page: null,
    totalPages: null,
  },
  auth: {
    email: null,
  },
};

export default initialState;
