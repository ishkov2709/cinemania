import { useLocation, useParams } from 'react-router-dom';
import {
  ActorsLink,
  ActorsLinkText,
  CloseLink,
  Container,
  ContentBox,
  Description,
  FavBtn,
  FlexDetailsWrapper,
  Generes,
  Img,
  ImgBaseInfoWrapper,
  ImgWrapper,
  Rating,
  RatingWrapper,
  Section,
  Subtitle,
  Title,
  TitleRateWrapper,
  Year,
  YearField,
} from './FilmDetails.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmById } from '../../store/films/operations';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import detailPoster from '../../img/detailPoster/img_poster.jpg';
import { Skeleton } from '@mui/material';
import { TailSpin } from 'react-loader-spinner';
import StarField from './StarField';
import { addToFav, delAsFav } from '../../store/auth/authSlice';
import { putUserdata } from '../../store/auth/operations';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const FilmDetails = () => {
  const { filmId } = useParams();
  const dispatch = useDispatch();
  const filmDetails = useSelector(state => state.films.filmDetails);
  const isLoading = useSelector(state => state.films.isLoading);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const favFilms = useSelector(state => state.auth.favFilms);
  const userId = useSelector(state => state.auth.userId);
  const email = useSelector(state => state.auth.email);
  const location = useLocation();
  const backLink = location.state?.from ?? '/catalog';
  const [loadImg, setLoadImg] = useState(false);

  useEffect(() => {
    if (filmId) dispatch(fetchFilmById(filmId));
  }, [dispatch, filmId]);

  const id = filmDetails?.id;
  const poster_path = filmDetails?.poster_path;
  const title = filmDetails?.title;

  const handleAddFavClick = e => {
    e.preventDefault();
    dispatch(addToFav({ id, poster_path, title }));
    if (email !== 'guest')
      dispatch(
        putUserdata({
          userId,
          email,
          films: [...favFilms, { id, poster_path, title }],
        })
      );
  };

  const handleDelFavClick = e => {
    e.preventDefault();
    dispatch(delAsFav(id));
    if (email !== 'guest')
      dispatch(putUserdata({ userId, email, films: [...favFilms.filter(el => el.id !== id)] }));
  };

  const handleLoadImg = () => {
    setLoadImg(true);
  };

  if (filmDetails !== null) {
    const { backdrop_path, release_date, title, vote_average, overview, genres } = filmDetails;
    return (
      <Section>
        <Container className="container">
          <ContentBox>
            {isLoggedIn && !favFilms?.find(el => el.id === id) && (
              <FavBtn type="button" onClick={handleAddFavClick}>
                <AiOutlineHeart
                  className='add'
                  style={{
                    width: 'inherit',
                    height: 'inherit',
                  }}
                />
              </FavBtn>
            )}

            {isLoggedIn && favFilms?.find(el => el.id === id) && (
              <FavBtn type="button" onClick={handleDelFavClick}>
                <AiFillHeart
                  className='delete'
                  style={{
                    width: 'inherit',
                    height: 'inherit',
                  }}
                />
              </FavBtn>
            )}

            <CloseLink to={backLink}>
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

            {!isLoading && (
              <>
                <ImgBaseInfoWrapper>
                  <ImgWrapper>
                    <Img
                      src={backdrop_path ? `${BASE_URL}${backdrop_path}` : detailPoster}
                      alt={title}
                      loadImg={loadImg}
                      onLoad={handleLoadImg}
                    />

                    {!loadImg && (
                      <Skeleton
                        variant="rectangular"
                        animation="wave"
                        sx={{
                          bgcolor: 'rgba(121, 121, 121, 0.7)',
                          width: 'inherit',
                          height: 'inherit',
                        }}
                      />
                    )}
                    <YearField className="first">
                      Рік: <Year>{new Date(release_date).getFullYear()}</Year>
                    </YearField>
                  </ImgWrapper>

                  <FlexDetailsWrapper>
                    <TitleRateWrapper>
                      <Title>{title}</Title>

                      <RatingWrapper>
                        <StarField />
                        <Rating>{(vote_average * 10).toFixed()}%</Rating>
                      </RatingWrapper>
                    </TitleRateWrapper>

                    <YearField className="second">
                      Рік: <Year>{new Date(release_date).getFullYear()}</Year>
                    </YearField>

                    <Description className="first">{overview}</Description>

                    <Subtitle>Жанри:</Subtitle>
                    <Generes>{genres.map(el => el.name).join(', ')}</Generes>
                  </FlexDetailsWrapper>
                </ImgBaseInfoWrapper>

                <Description className="second">{overview}</Description>

                <ActorsLink to="actors" state={{ from: location }}>
                  <ActorsLinkText>Актори</ActorsLinkText>
                </ActorsLink>
              </>
            )}
          </ContentBox>
        </Container>
      </Section>
    );
  }
};

export default FilmDetails;
