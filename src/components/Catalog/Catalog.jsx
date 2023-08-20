import { useDispatch, useSelector } from 'react-redux';
import { fetchPagination, fetchTrendFilms } from '../../store/operations';
import SearchForm from '../SearchForm';
import { Btn, Categories, Container, Section } from './Catalog.styled';
import { useEffect } from 'react';
import FilmList from './FilmList';
import Pagination from './Pagination';

const Catalog = () => {
  const arrayFilms = useSelector(state => state.arrayFilms);
  const page = useSelector(state => state.pagination.page);
  const lastFetch = useSelector(state => state.lastFetch);
  const isPaginated = useSelector(state => state.pagination.isPaginated);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!arrayFilms && !isPaginated) dispatch(fetchTrendFilms());
  }, [isPaginated, arrayFilms, dispatch]);

  useEffect(() => {
    if (page && isPaginated) dispatch(fetchPagination(`${lastFetch}&page=${page}`));
  }, [page, isPaginated, lastFetch, dispatch]);

  return (
    <Section>
      <Container className="container">
        <SearchForm />
        <Categories className="animate__animated animate__fadeInDown">
          <Btn type="button">Жанр</Btn>
          <Btn type="button">Теги</Btn>
          <Btn type="button">Нове/Популярне</Btn>
        </Categories>

        {arrayFilms && <FilmList films={arrayFilms} />}

        {page && !isLoading && <Pagination />}
      </Container>
    </Section>
  );
};

export default Catalog;
