import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reset, setNotFoundError } from '../../store/films/filmsSlice';
import { BtnCatalog, Container, Icon, Section, Text } from './NotFound.styled';
import { BiSolidErrorCircle } from 'react-icons/bi';

const NotFound = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotFoundError());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <Section>
      <Container className="container">
        <Text>
          Not Found{' '}
          <Icon>
            <BiSolidErrorCircle color="#9F1212" style={{ width: 'inherit', height: 'inherit' }} />
          </Icon>
        </Text>

        <BtnCatalog to="/">Повернутися на головну сторінку</BtnCatalog>
      </Container>
    </Section>
  );
};

export default NotFound;
