import { DetailsLink, FavBtn, Item, List, Title } from './FilmList.styled';
import basePoster from '../../../img/basePoster/img_poster.jpg';
import { AiOutlineHeart } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(({ id, poster_path, title }) => (
        <Item key={id}>
          <DetailsLink
            urlbg={poster_path ? `${BASE_URL}${poster_path}` : basePoster}
            to={`/catalog/${id}`}
            state={{ from: location }}
          >
            <FavBtn type="button">
              <AiOutlineHeart size={24} color="#ffffff" />
            </FavBtn>
            <Title>{title}</Title>
          </DetailsLink>
        </Item>
      ))}
    </List>
  );
};

export default FilmList;
