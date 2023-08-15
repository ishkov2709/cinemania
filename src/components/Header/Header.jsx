import { Link } from 'react-router-dom';
import { MdDiamond } from 'react-icons/md';
import { BsBookmark } from 'react-icons/bs';
import { SlLogin } from 'react-icons/sl';
import * as Styled from './Header.styled';

const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <div className="container">
        <Styled.Nav>
          <Link to="/">
            <MdDiamond size={50} color="#ffffff" />
          </Link>
          <Styled.FavLogWrapper>
            <Link to="/">
              <BsBookmark size={35} color="#ffffff" />
            </Link>
            <Link to="/">
              <SlLogin size={35} color="#ffffff" />
            </Link>
          </Styled.FavLogWrapper>
        </Styled.Nav>
      </div>
    </Styled.HeaderWrapper>
  );
};

export default Header;
