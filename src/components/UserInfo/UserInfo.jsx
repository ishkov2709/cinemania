import { useDispatch, useSelector } from 'react-redux';
import {
  CloseLink,
  Container,
  ContentBox,
  Img,
  ImgWrapper,
  LogOutBtn,
  Name,
  Section,
  Themes,
} from './UserInfo.styled';
import { FaUserAlt } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { logInError, logInSucces, logOut } from '../../store/auth/authSlice';

const UserInfo = () => {
  const name = useSelector(state => state.auth.name);
  const email = useSelector(state => state.auth.email);
  const imageUrl = useSelector(state => state.auth.imageUrl);
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

  return (
    <Section>
      <Container className="container">
        <ContentBox>
          <CloseLink to={backLink}>
            <RxCross1 style={{ width: 'inherit', height: 'inherit' }} />
          </CloseLink>

          <ImgWrapper>
            {email !== 'guest' ? (
              <Img src={imageUrl} alt={name} />
            ) : (
              <FaUserAlt style={{ width: 'inherit', height: 'inherit' }} />
            )}
          </ImgWrapper>

          <Name>{name}</Name>

          {email === 'guest' && (
            <GoogleLogin onSuccess={responseGoogle} onError={errorResponseGoogle} />
          )}

          <Themes to="/themes" state={{ from: location }}>
            Теми
          </Themes>

          <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
            Вийти
          </LogOutBtn>
        </ContentBox>
      </Container>
    </Section>
  );
};

export default UserInfo;
