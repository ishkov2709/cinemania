import { Item, List, Title } from './FilmList.styled';
import basePoster from '../../../img/basePoster/img_poster_mob.jpg';
import { AiOutlineHeart } from 'react-icons/ai';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const FilmList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, poster_path, title }) => (
        <Item key={id} urlBg={poster_path ? `${BASE_URL}${poster_path}` : basePoster}>
          <AiOutlineHeart
            size={24}
            color="#ffffff"
            style={{ position: 'absolute', top: '10px', left: '10px' }}
          />
          <Title>{title}</Title>
        </Item>
      ))}
    </List>
  );
};

export default FilmList;
