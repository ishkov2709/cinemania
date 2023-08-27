const initialState = {
  films: {
    isLoading: false,
    lastFetch: null,
    search: null,
    trendFilms: null,
    arrayFilms: null,
    filmDetails: null,
    filmActors: null,
    error: null,
    fetchUrl: null,
    pagination: {
      isPaginated: false,
      page: null,
      totalPages: null,
    },
  },
  auth: {
    isLoggedIn: false,
    email: null,
    name: null,
    userId: null,
    imageUrl: null,
    favFilms: null,
    logInError: null,
  },
};

export default initialState;
