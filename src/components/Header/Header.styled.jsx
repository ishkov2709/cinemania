import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 2;

  padding: 28px 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FavLogWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const UserInfoLink = styled(Link)`
  display: block;

  width: 40px;
  height: 40px;

  background-color: #fff;
  color: #000;

  border-radius: 50%;

  overflow: hidden;
`;

export const Img = styled.img``;
