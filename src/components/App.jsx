import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import '../index.css';
import SharedLayout from './SharedLayout';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserdata } from '../store/auth/operations';
import RestrictedRoute from './RestrictedRoute';

const Catalog = lazy(() => import('./Catalog'));
const FilmDetails = lazy(() => import('./FilmDetails'));
const Actors = lazy(() => import('./Actors'));
const Favorites = lazy(() => import('./Favorites'));
const Themes = lazy(() => import('./Themes'));

function App() {
  const email = useSelector(state => state.auth.email);
  const dispatch = useDispatch();

  useEffect(() => {
    if (email && email !== 'guest') {
      dispatch(fetchUserdata(email));
    }
  }, [email, dispatch]);

  useEffect(() => {});
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<PrivateRoute />} />
          <Route path="userinfo" element={<PrivateRoute />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:filmId" element={<FilmDetails />} />
          <Route path="catalog/:filmId/actors" element={<Actors />} />
          <Route path="favorites" element={<RestrictedRoute component={<Favorites />} />} />
          <Route path="themes" element={<RestrictedRoute component={<Themes />} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
