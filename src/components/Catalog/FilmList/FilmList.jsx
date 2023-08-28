import { List } from './FilmList.styled';
import basePoster from '../../../img/basePoster/img_poster.jpg';
import Item from './Item/Item';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const FilmList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, poster_path, title }) => (
        <Item
          key={id}
          id={id}
          poster_path={poster_path ? `${BASE_URL}${poster_path}` : basePoster}
          title={title}
        />
      ))}
    </List>
  );
};

export default FilmList;
