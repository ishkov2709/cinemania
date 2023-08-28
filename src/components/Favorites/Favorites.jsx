import { useSelector } from 'react-redux';
import { Section, Container, Title, EmptyWrapper, EmptyText } from './Favorites.styled';
import FilmList from '../Catalog/FilmList/FilmList';
import { TbMovieOff } from 'react-icons/tb';

const Favorites = () => {
  const favFilms = useSelector(state => state.auth.favFilms);
  return (
    <Section>
      <Container className="container">
        <Title>Фільми які вам сподобалися</Title>

        {favFilms.length > 0 && <FilmList films={favFilms} />}

        {!favFilms?.length && (
          <EmptyWrapper>
            <TbMovieOff size={72} color="#fff" />
            <EmptyText>Список фільмів порожній...</EmptyText>
          </EmptyWrapper>
        )}
      </Container>
    </Section>
  );
};

export default Favorites;
