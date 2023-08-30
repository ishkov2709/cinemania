import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchFilmActors } from '../../store/films/operations';
import { useParams } from 'react-router-dom';
import { BackLink, CloseLink, Container, List, PageWrapper, Section } from './Actors.styled';
import baseImgActor from '../../img/photoActor/img_actor.jpg';
import { PiArrowBendUpLeftLight } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';
import Item from './Item';
import { TailSpin } from 'react-loader-spinner';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const Actors = () => {
  const { filmId } = useParams();
  const dispatch = useDispatch();
  const filmActors = useSelector(state => state.films.filmActors);
  const isLoading = useSelector(state => state.films.isLoading);
  const location = useLocation();
  const backLink = location.state?.from ?? '/catalog';
  const closeLink = location.state?.from.state?.from ?? '/catalog';

  useEffect(() => {
    dispatch(fetchFilmActors(filmId));
  }, [filmId, dispatch]);

  const changeIconSize = () => {
    if (window.innerWidth < 744) return 30;
    if (window.innerWidth >= 744) return 50;
  };

  return (
    <Section>
      <Container className="container">
        <PageWrapper>
          <BackLink to={backLink}>
            <PiArrowBendUpLeftLight size={changeIconSize()} />
          </BackLink>
          <CloseLink to={closeLink}>
            <RxCross1 size={changeIconSize()} />
          </CloseLink>

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

          {filmActors?.length && !isLoading && (
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
          )}
        </PageWrapper>
      </Container>
    </Section>
  );
};

export default Actors;
