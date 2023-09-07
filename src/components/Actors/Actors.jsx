import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchFilmActors } from '../../store/films/operations';
import { useParams } from 'react-router-dom';
import { BackLink, CloseLink, Container, PageWrapper, Section } from './Actors.styled';
import { PiArrowBendUpLeftLight } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';
import { TailSpin } from 'react-loader-spinner';
import ActorsList from './ActorsList/ActorsList';

const Actors = () => {
  const { filmId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.films.isLoading);
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
            <PiArrowBendUpLeftLight style={{ width: 'inherit', height: 'inherit' }} />
          </BackLink>
          <CloseLink to={closeLink}>
            <RxCross1 style={{ width: 'inherit', height: 'inherit' }} />
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

          {!isLoading && <ActorsList />}
        </PageWrapper>
      </Container>
    </Section>
  );
};

export default Actors;
