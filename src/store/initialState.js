const initialState = {
  isLoading: false,
  search: null,
  trendFilms: null,
  filmDetails: null,
  filmActors: null,
  error: null,
  fetchUrl: null,
  pagination: {
    page: null,
    totalPages: null,
  },
  auth: {
    email: null,
  },
};

export default initialState;
