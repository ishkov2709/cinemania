import SearchForm from '../SearchForm';
import ResolutionListener from '../ResolutionListener';
import { BtnCatalog, Container, HeroText, HeroTitle, Section } from './Home.styled';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../../store/films/filmsSlice';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.get('query')) setSearchParams();

    dispatch(reset());
  }, [searchParams, setSearchParams, dispatch]);

  return (
    <Section>
      <Container className="container">
        <ResolutionListener component={SearchForm} position="home" />

        <HeroTitle variant="h1" component="h1" className="animate__animated animate__fadeInLeftBig">
          Cinemania
        </HeroTitle>
        <HeroText variant="p" component="p" className="animate__animated animate__slideInUp">
          На нашому сайті ви знайдете найповнішу та найактуальнішу базу даних про різноманітні
          фільми - від класичних шедеврів до найновіших кінематографічних творів.
        </HeroText>
        <BtnCatalog to="catalog">Каталог фільмів</BtnCatalog>
      </Container>
    </Section>
  );
};

export default Home;
