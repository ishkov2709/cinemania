import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '75863554b170222a0e5caae215e0183a';

export const fetchTrendFilms = createAsyncThunk(
  'trending/fetchFilms',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/trending/movie/day?language=uk-UA&api_key=${API_KEY}`);
      return { res: data, fetchUrl: `/trending/movie/day?language=uk-UA&api_key=${API_KEY}` };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
