import { Route, Routes } from 'react-router-dom';
import '../index.css';
import SharedLayout from './SharedLayout';
import Home from './Home';
import { lazy } from 'react';

const Catalog = lazy(() => import('./Catalog'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
