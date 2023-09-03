import { useLocation, useParams } from 'react-router-dom';
import {
  ActorsLink,
  ActorsLinkText,
  CloseLink,
  Container,
  ContentBox,
  Description,
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
import detailPoster from '../../img/detailPoster/img_poster.jpg';
import { Skeleton } from '@mui/material';
import { TailSpin } from 'react-loader-spinner';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const FilmDetails = () => {
  const { filmId } = useParams();
  const dispatch = useDispatch();
  const filmDetails = useSelector(state => state.films.filmDetails);
  const isLoading = useSelector(state => state.films.isLoading);
  const location = useLocation();
  const backLink = location.state?.from ?? '/catalog';
  const [loadImg, setLoadImg] = useState(false);
  useEffect(() => {
    if (filmId) dispatch(fetchFilmById(filmId));
  }, [dispatch, filmId]);

  const changeIconSize = () => {
    if (window.innerWidth < 744) return 30;
    if (window.innerWidth >= 744) return 50;
  };

  const changeSkeletonWidth = () => {
    if (window.innerWidth >= 1440) return 335;
    if (window.innerWidth >= 744) return 456;
    if (window.innerWidth < 744) return 272;
  };

  const changeSkeletonHeight = () => {
    if (window.innerWidth >= 1440) return 200;
    if (window.innerWidth >= 744) return 336;
    if (window.innerWidth < 744) return 153;
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
            <CloseLink to={backLink}>
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

            {!isLoading && (
              <>
                <ImgBaseInfoWrapper>
                  <ImgWrapper>
                    <Img
                      src={backdrop_path ? `${BASE_URL}${backdrop_path}` : detailPoster}
                      alt={title}
                      loadImg={loadImg}
                      onLoad={handleLoadImg}
                      width={window.innerWidth >= 1440 ? 451 : 'auto'}
                    />

                    {!loadImg && (
                      <Skeleton
                        variant="rectangular"
                        width={changeSkeletonWidth()}
                        height={changeSkeletonHeight()}
                        animation="wave"
                        sx={{ bgcolor: 'rgba(121, 121, 121, 0.7)' }}
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
