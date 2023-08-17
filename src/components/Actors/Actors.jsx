import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchFilmActors } from '../../store/operations';
import { useParams } from 'react-router-dom';
import {
  BackLink,
  CloseLink,
  Container,
  HeroName,
  Img,
  ImgWrapper,
  InitialsWrapper,
  Item,
  List,
  PageWrapper,
  Section,
  TrueName,
} from './Actors.styled';
import baseImgActor from '../../img/photoActor/img_actor.jpg';
import { PiArrowBendUpLeftLight } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const Actors = () => {
  const { filmId } = useParams();
  const dispatch = useDispatch();
  const filmActors = useSelector(state => state.filmActors);
  const location = useLocation();
  const backLink = location.state?.from ?? '/catalog';
  const closeLink = location.state?.from.state?.from ?? '/catalog';

  useEffect(() => {
    dispatch(fetchFilmActors(filmId));
  }, [filmId, dispatch]);

  return (
    <Section>
      <Container className="container">
        <PageWrapper>
          <BackLink to={backLink}>
            <PiArrowBendUpLeftLight size={30} />
          </BackLink>
          <CloseLink to={closeLink}>
            <RxCross1 size={30} />
          </CloseLink>
          {filmActors?.length && (
            <List>
              {filmActors?.map(({ id, character, name, profile_path }) => (
                <Item key={id}>
                  <ImgWrapper>
                    <Img
                      src={profile_path ? `${BASE_URL}${profile_path}` : baseImgActor}
                      width={147}
                    />
                  </ImgWrapper>
                  <InitialsWrapper>
                    <HeroName>{character}</HeroName>
                    <TrueName>{name}</TrueName>
                  </InitialsWrapper>
                </Item>
              ))}
            </List>
          )}
        </PageWrapper>
      </Container>
    </Section>
  );
};

export default Actors;
