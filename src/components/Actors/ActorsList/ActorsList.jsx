import { useSelector } from 'react-redux';
import Item from '../Item';
import { List } from './ActorsList.styled';
import baseImgActor from '../../../img/photoActor/img_actor.jpg';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const ActorsList = () => {
  const filmActors = useSelector(state => state.films.filmActors);

  if (filmActors?.length)
    return (
      <List>
        {filmActors.map(({ id, character, name, profile_path }) => (
          <Item
            key={id}
            character={character}
            name={name}
            profile_path={profile_path ? `${BASE_URL}${profile_path}` : baseImgActor}
          />
        ))}
      </List>
    );
};

export default ActorsList;
