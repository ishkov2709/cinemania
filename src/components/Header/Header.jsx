import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MdDiamond } from 'react-icons/md';
import { BsBookmark } from 'react-icons/bs';
import { SlLogin } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { FavLogWrapper, HeaderWrapper, Img, Nav, UserInfoLink } from './Header.styled';
import { reset } from '../../store/films/filmsSlice';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const email = useSelector(state => state.auth.email);
  const imageUrl = useSelector(state => state.auth.imageUrl);
  const location = useLocation();

  const handleReset = () => {
    if (searchParams.get('query')) setSearchParams();

    dispatch(reset());
  };
  return (
    <HeaderWrapper>
      <div className="container">
        <Nav>
          <Link to="/" onClick={handleReset}>
            <MdDiamond size={50} color="#ffffff" />
          </Link>
          <FavLogWrapper>
            {isLoggedIn ? (
              <>
                <Link to="/">
                  <BsBookmark size={35} color="#ffffff" />
                </Link>
                <UserInfoLink to="userinfo" state={{ from: location }}>
                  {email === 'guest' && <FaUserAlt size={40} />}
                  {email !== 'guest' && <Img src={imageUrl} alt="user" width={40} />}
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
