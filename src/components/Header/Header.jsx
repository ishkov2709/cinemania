import { Link, useSearchParams } from 'react-router-dom';
import { MdDiamond } from 'react-icons/md';
import { BsBookmark } from 'react-icons/bs';
import { SlLogin } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { FavLogWrapper, HeaderWrapper, Nav } from './Header.styled';
import { reset } from '../../store/filmsSlice';

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

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
            <Link to="/">
              <BsBookmark size={35} color="#ffffff" />
            </Link>
            <Link to="/">
              <SlLogin size={35} color="#ffffff" />
            </Link>
          </FavLogWrapper>
        </Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
