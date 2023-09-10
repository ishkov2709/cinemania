import { List } from './FilmList.styled';
import Item from './Item/Item';

const FilmList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, poster_path, title }) => (
        <Item key={id} id={id} poster_path={poster_path} title={title} />
      ))}
    </List>
  );
};

export default FilmList;
