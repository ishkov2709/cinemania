import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { filmsReducer } from './films/filmsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  films: filmsReducer,
});

export default rootReducer;
