import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendFilms } from '../../store/operations';
import SearchForm from '../SearchForm';
import { Btn, Categories, Container, Section } from './Catalog.styled';
import { useEffect } from 'react';
import FilmList from './FilmList/FilmList';
import Pagination from './FilmList/Pagination/Pagination';

const Catalog = () => {
  const trendFilms = useSelector(state => state.trendFilms);
  const page = useSelector(state => state.pagination.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendFilms());
  }, [dispatch]);
  return (
    <Section>
      <Container className="container">
        <SearchForm />
        <Categories className="animate__animated animate__fadeInDown">
          <Btn type="button">Жанр</Btn>
          <Btn type="button">Теги</Btn>
          <Btn type="button">Нове/Популярне</Btn>
        </Categories>

        {trendFilms && <FilmList films={trendFilms} />}

        {page && <Pagination />}
      </Container>
    </Section>
  );
};

export default Catalog;
