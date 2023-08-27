import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://64dd031de64a8525a0f77f7b.mockapi.io/api/v1';

export const fetchUserdata = createAsyncThunk('auth/fetchUsers', async (email, thunkAPI) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/users`);
    const user = data?.find(el => el.email === email);
    if (!user) {
      const { data } = await axios.post(`${BASE_URL}/users`, { email: email, films: [] });
      return data;
    }
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const putUserdata = createAsyncThunk(
  'auth/postUserdata',
  async ({ userId, email, films }, thunkAPI) => {
    try {
      const data = await axios.put(`${BASE_URL}/users/${userId}`, { email, films });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
