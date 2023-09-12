import { CloseLink, Container, ContentBox, GuestBtn, Section, Title } from './LogIn.styled';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { guestAuth, logInError, logInSucces } from '../../store/auth/authSlice';
import { RxCross1 } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';

const LogIn = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const responseGoogle = ({ credential }) => {
    const decode = jwt_decode(credential);
    dispatch(logInSucces(decode));
  };

  const errorResponseGoogle = response => {
    dispatch(logInError(response));
  };

  const logInAsGuest = () => {
    dispatch(guestAuth());
  };

  return (
    <Section>
      <Container className="container">
        <ContentBox>
          <CloseLink to={backLink}>
            <RxCross1 style={{ width: 'inherit', height: 'inherit' }} />
          </CloseLink>
          <Title>Вхiд</Title>
          <GoogleLogin onSuccess={responseGoogle} onError={errorResponseGoogle} />
          <GuestBtn type="button" onClick={logInAsGuest}>
            Увійти як Гість
          </GuestBtn>
        </ContentBox>
      </Container>
    </Section>
  );
};

export default LogIn;
