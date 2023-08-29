import { Typography } from '@mui/material';
import * as Style from './Home.styled';
import SearchForm from '../SearchForm';
import ResolutionListener from '../ResolutionListener';

const Home = () => {
  return (
    <Style.Section>
      <Style.Container className="container">
        <ResolutionListener component={SearchForm} position="home" />

        <Typography
          variant="h1"
          component="h1"
          sx={{ fontFamily: 'Rubik, sans-serif', fontSize: '32px', fontWeight: '700' }}
          className="animate__animated animate__fadeInLeftBig"
        >
          Cinemania
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ fontFamily: 'Rubik, sans-serif', fontSize: '20px', fontWeight: '300' }}
          className="animate__animated animate__slideInUp"
        >
          На нашому сайті ви знайдете найповнішу та найактуальнішу базу даних про різноманітні
          фільми - від класичних шедеврів до найновіших кінематографічних творів.
        </Typography>
        <Style.BtnCatalog to="catalog">Каталог фільмів</Style.BtnCatalog>
      </Style.Container>
    </Style.Section>
  );
};

export default Home;
