import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MdDiamond } from 'react-icons/md';
import { BsBookmark } from 'react-icons/bs';
import { SlLogin } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import {
  FavLink,
  FavLogWrapper,
  HeaderWrapper,
  Img,
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

  const changeIconSizeImg = () => {
    if (window.innerWidth < 744) return 40;
    if (window.innerWidth >= 744) return 70;
  };

  const changeIconSizeFav = () => {
    if (window.innerWidth < 744) return 35;
    if (window.innerWidth >= 744) return 50;
  };

  return (
    <HeaderWrapper>
      <div className="container">
        <Nav>
          <ToMainLink to="/" onClick={handleReset}>
            <MdDiamond size={50} color="#ffffff" />
          </ToMainLink>

          <ResolutionListener component={SearchForm} position="header" />

          <FavLogWrapper>
            {isLoggedIn ? (
              <>
                <FavLink to="favorites">
                  <BsBookmark size={changeIconSizeFav()} color="#ffffff" />
                </FavLink>
                <UserInfoLink to="userinfo" state={{ from: location }}>
                  {email === 'guest' && <FaUserAlt size={changeIconSizeImg()} />}
                  {email !== 'guest' && (
                    <Img src={imageUrl} alt="user" width={changeIconSizeImg()} />
                  )}
                </UserInfoLink>
              </>
            ) : (
              <Link to="login" state={{ from: location }}>
                <SlLogin size={35} color="#ffffff" />
              </Link>
            )}
          </FavLogWrapper>
        </Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
