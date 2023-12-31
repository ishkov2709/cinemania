import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setSearch } from '../../store/films/filmsSlice';
import Categories from './Categories';
import { fetchPagination, fetchSearchQuery, fetchTrendFilms } from '../../store/films/operations';
import SearchForm from '../SearchForm';
import { Container, Section } from './Catalog.styled';
import { useEffect } from 'react';
import FilmList from './FilmList';
import Pagination from './Pagination';
import { TailSpin } from 'react-loader-spinner';
import ResolutionListener from '../ResolutionListener';

const Catalog = () => {
  const arrayFilms = useSelector(state => state.films.arrayFilms);
  const page = useSelector(state => state.films.pagination.page);
  const totalPages = useSelector(state => state.films.pagination.totalPages);
  const lastFetch = useSelector(state => state.films.lastFetch);
  const isPaginated = useSelector(state => state.films.pagination.isPaginated);
  const isLoading = useSelector(state => state.films.isLoading);
  const search = useSelector(state => state.films.search);
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
        <ResolutionListener component={SearchForm} position="catalog" />
        <Categories />
        {isLoading && (
          <TailSpin
            height="80"
            width="80"
            color="#08B275"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ padding: '40px 0', display: 'flex', justifyContent: 'center' }}
            wrapperClass=""
            visible={true}
          />
        )}
        {arrayFilms && !isLoading && <FilmList films={arrayFilms} />}
        {totalPages > 1 && !isLoading && <Pagination />}
      </Container>
    </Section>
  );
};

export default Catalog;
