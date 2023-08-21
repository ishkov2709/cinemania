import { useDispatch, useSelector } from 'react-redux';
import { fetchPagination, fetchSearchQuery, fetchTrendFilms } from '../../store/operations';
import SearchForm from '../SearchForm';
import { Container, Section } from './Catalog.styled';
import { useEffect } from 'react';
import FilmList from './FilmList';
import Pagination from './Pagination';
import Categories from './Categories';
import { useSearchParams } from 'react-router-dom';
import { setSearch } from '../../store/filmsSlice';

const Catalog = () => {
  const arrayFilms = useSelector(state => state.arrayFilms);
  const page = useSelector(state => state.pagination.page);
  const totalPages = useSelector(state => state.pagination.totalPages);
  const lastFetch = useSelector(state => state.lastFetch);
  const isPaginated = useSelector(state => state.pagination.isPaginated);
  const isLoading = useSelector(state => state.isLoading);
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (search && !searchParams.get('query')) setSearchParams({ query: search });

    if (!search && searchParams.get('query')) dispatch(setSearch(searchParams.get('query')));

    if (search && searchParams.get('query')) dispatch(fetchSearchQuery(search));
  }, [search, searchParams, setSearchParams, dispatch]);

  useEffect(() => {
    if (!arrayFilms && !isPaginated && !search && !searchParams.get('query'))
      dispatch(fetchTrendFilms());
  }, [search, searchParams, isPaginated, arrayFilms, dispatch]);

  useEffect(() => {
    if (page && isPaginated) dispatch(fetchPagination(`${lastFetch}&page=${page}`));
  }, [page, isPaginated, lastFetch, dispatch]);

  return (
    <Section>
      <Container className="container">
        <SearchForm />
        <Categories />

        {arrayFilms && <FilmList films={arrayFilms} />}

        {totalPages > 1 && !isLoading && <Pagination />}
      </Container>
    </Section>
  );
};

export default Catalog;
