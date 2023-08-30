import { useSelector } from 'react-redux';
import { Section, Container, Title, EmptyWrapper, EmptyText } from './Favorites.styled';
import FilmList from '../Catalog/FilmList/FilmList';
import { TbMovieOff } from 'react-icons/tb';

const Favorites = () => {
  const favFilms = useSelector(state => state.auth.favFilms);

  const changeIconSize = () => {
    if (window.innerWidth < 744) return 72;
    if (window.innerWidth >= 744) return 96;
  };

  return (
    <Section>
      <Container className="container">
        <Title>Фільми які вам сподобалися</Title>

        {favFilms.length > 0 && <FilmList films={favFilms} />}

        {!favFilms?.length && (
          <EmptyWrapper>
            <TbMovieOff size={changeIconSize()} color="#fff" />
            <EmptyText>Список фільмів порожній...</EmptyText>
          </EmptyWrapper>
        )}
      </Container>
    </Section>
  );
};

export default Favorites;
