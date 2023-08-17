import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import '../index.css';
import SharedLayout from './SharedLayout';
import Home from './Home';

const Catalog = lazy(() => import('./Catalog'));
const FilmDetails = lazy(() => import('./FilmDetails'));
const Actors = lazy(() => import('./Actors'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:filmId" element={<FilmDetails />} />
          <Route path="catalog/:filmId/actors" element={<Actors />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
