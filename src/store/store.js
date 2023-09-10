import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filmsReducer } from './films/filmsSlice';
import { authReducer } from './auth/authSlice';
import initialState from './initialState';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const rootPersistConfig = {
  key: 'root',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage,
};

const filmsPersistConfig = {
  key: 'films',
  storage,
  whitelist: [],
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  films: persistReducer(filmsPersistConfig, filmsReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialState,
  middleware: customizedMiddleware,
});
export const persistor = persistStore(store);
