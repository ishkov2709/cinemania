import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = '75863554b170222a0e5caae215e0183a';

export const fetchTrendFilms = createAsyncThunk('film/trending', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?language=uk-UA&api_key=${API_KEY}`
    );
    return {
      ...data,
      lastFetch: `${BASE_URL}/trending/movie/day?language=uk-UA&api_key=${API_KEY}`,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchFilmById = createAsyncThunk('film/details', async (filmId, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${filmId}?language=uk-UA&api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchFilmActors = createAsyncThunk('film/actors', async (filmId, thunkAPI) => {
  try {
    const {
      data: { cast },
    } = await axios.get(`${BASE_URL}/movie/${filmId}/credits?language=uk-UA&api_key=${API_KEY}`);
    return cast;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchPagination = createAsyncThunk('pagination', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.get(credentials);
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const fetchPopularFilms = createAsyncThunk('films/popular', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/popular?language=uk-UA&api_key=${API_KEY}`);
    return { ...data, lastFetch: `${BASE_URL}/movie/popular?language=uk-UA&api_key=${API_KEY}` };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchUpcomingFilms = createAsyncThunk('films/upcoming', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/upcoming?language=uk-UA&api_key=${API_KEY}`
    );
    return { ...data, lastFetch: `${BASE_URL}/movie/upcoming?language=uk-UA&api_key=${API_KEY}` };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchTopRatedFilms = createAsyncThunk('films/top_rated', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/top_rated?language=uk-UA&api_key=${API_KEY}`
    );
    return { ...data, lastFetch: `${BASE_URL}/movie/top_rated?language=uk-UA&api_key=${API_KEY}` };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchSearchQuery = createAsyncThunk('films/search', async (query, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?language=uk-UA&api_key=${API_KEY}&query=${query}`
    );
    return {
      ...data,
      lastFetch: `${BASE_URL}/search/movie?language=uk-UA&api_key=${API_KEY}&query=${query}`,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
