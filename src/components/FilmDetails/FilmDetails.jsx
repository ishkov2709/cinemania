import { useLocation, useParams } from 'react-router-dom';
import {
  ActorsLink,
  CloseLink,
  Container,
  ContentBox,
  Description,
  Generes,
  Img,
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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmById } from '../../store/operations';
import { RxCross1 } from 'react-icons/rx';
import detailPoster from '../../img/detailPoster/img_poster.jpg';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const FilmDetails = () => {
  const { filmId } = useParams();
  const dispatch = useDispatch();
  const filmDetails = useSelector(state => state.filmDetails);
  const location = useLocation();
  const backLink = location.state?.from ?? '/catalog';

  useEffect(() => {
    if (filmId) dispatch(fetchFilmById(filmId));
  }, [dispatch, filmId]);

  if (filmDetails !== null) {
    const { backdrop_path, release_date, title, vote_average, overview, genres } = filmDetails;
    return (
      <Section>
        <Container className="container">
          <ContentBox>
            <CloseLink to={backLink}>
              <RxCross1 size={30} />
            </CloseLink>

            <ImgWrapper>
              <Img src={backdrop_path ? `${BASE_URL}${backdrop_path}` : detailPoster} alt={title} />
              <YearField>
                Рік: <Year>{new Date(release_date).getFullYear()}</Year>
              </YearField>
            </ImgWrapper>

            <TitleRateWrapper>
              <Title>{title}</Title>
              <RatingWrapper>
                <Rating>{(vote_average * 10).toFixed()}%</Rating>
              </RatingWrapper>
            </TitleRateWrapper>

            <Description>{overview}</Description>

            <Subtitle>Жанри:</Subtitle>
            <Generes>{genres.map(el => el.name).join(', ')}</Generes>

            <ActorsLink>Актори</ActorsLink>
          </ContentBox>
        </Container>
      </Section>
    );
  }
};

export default FilmDetails;
