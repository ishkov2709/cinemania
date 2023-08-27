import { useDispatch } from 'react-redux';
import { Btn, Wrapper } from './Categories.styled';
import {
  fetchPopularFilms,
  fetchTopRatedFilms,
  fetchUpcomingFilms,
} from '../../../store/films/operations';
import { useSearchParams } from 'react-router-dom';

const Categories = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFetch = callback => {
    if (searchParams.get('query')) setSearchParams();
    dispatch(callback());
  };

  return (
    <Wrapper className="animate__animated animate__fadeInDown">
      <Btn type="button" onClick={() => handleFetch(fetchUpcomingFilms)}>
        Незабаром у кіно
      </Btn>
      <Btn type="button" onClick={() => handleFetch(fetchPopularFilms)}>
        Популярні
      </Btn>
      <Btn type="button" onClick={() => handleFetch(fetchTopRatedFilms)}>
        За рейтингом
      </Btn>
    </Wrapper>
  );
};

export default Categories;
