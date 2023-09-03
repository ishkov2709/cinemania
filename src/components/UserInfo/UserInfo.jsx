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
} from './UserInfo.styled';
import { FaUserAlt } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { logInError, logInSucces, logOut } from '../../store/auth/authSlice';

const UserInfo = () => {
  const name = useSelector(state => state.auth.name);
  const email = useSelector(state => state.auth.email);
  const imageUrl = useSelector(state => state.auth.imageUrl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const responseGoogle = ({ credential }) => {
    const decode = jwt_decode(credential);
    dispatch(logInSucces(decode));
    navigate('/catalog');
  };

  const errorResponseGoogle = response => {
    dispatch(logInError(response));
  };

  const changeUserImgSize = () => {
    if (window.innerWidth >= 1440) return 150;
    if (window.innerWidth < 1440) return 210;
  };

  const changeIconSize = () => {
    if (window.innerWidth < 744) return 30;
    if (window.innerWidth >= 744) return 50;
  };

  return (
    <Section>
      <Container className="container">
        <ContentBox>
          <CloseLink to={backLink}>
            <RxCross1 size={changeIconSize()} />
          </CloseLink>

          <ImgWrapper>
            {email !== 'guest' ? (
              <Img src={imageUrl} alt={name} width={changeUserImgSize()} />
            ) : (
              <FaUserAlt size={changeUserImgSize()} />
            )}
          </ImgWrapper>

          <Name>{name}</Name>

          {email === 'guest' && (
            <GoogleLogin onSuccess={responseGoogle} onError={errorResponseGoogle} />
          )}

          <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
            Вийти
          </LogOutBtn>
        </ContentBox>
      </Container>
    </Section>
  );
};

export default UserInfo;
