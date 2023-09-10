import { useLocation, useSearchParams } from 'react-router-dom';
import { MdDiamond } from 'react-icons/md';
import { BsBookmark } from 'react-icons/bs';
import { SlLogin } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import {
  FavLink,
  FavLogWrapper,
  HeaderWrapper,
  Img,
  LoginLink,
  Nav,
  ToMainLink,
  UserInfoLink,
} from './Header.styled';
import { reset } from '../../store/films/filmsSlice';
import { FaUserAlt } from 'react-icons/fa';
import ResolutionListener from '../ResolutionListener';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const email = useSelector(state => state.auth.email);
  const imageUrl = useSelector(state => state.auth.imageUrl);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleReset = () => {
    if (searchParams.get('query')) setSearchParams();

    dispatch(reset());
  };

  return (
    <HeaderWrapper>
      <div className="container">
        <Nav>
          <ToMainLink to="/" onClick={handleReset}>
            <MdDiamond size={50} />
          </ToMainLink>

          <ResolutionListener component={SearchForm} position="header" />

          <FavLogWrapper>
            {isLoggedIn ? (
              <>
                <FavLink to="favorites">
                  <BsBookmark style={{ width: 'inherit', height: 'inherit' }} />
                </FavLink>
                <UserInfoLink to="userinfo" state={{ from: location }}>
                  {email === 'guest' && (
                    <FaUserAlt style={{ width: 'inherit', height: 'inherit' }} />
                  )}
                  {email !== 'guest' && <Img src={imageUrl} alt="user" />}
                </UserInfoLink>
              </>
            ) : (
              <LoginLink to="login" state={{ from: location }}>
                <SlLogin size={35} />
              </LoginLink>
            )}
          </FavLogWrapper>
        </Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
