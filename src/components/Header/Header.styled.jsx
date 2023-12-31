import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 2;

  padding: 28px 0;

  @media screen and (min-width: 744px) {
    & {
      padding: 48px 0;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      padding: 48px 0;
    }
  }
`;

export const ToMainLink = styled(Link)`
  color: #fff;

  transition: color 250ms ease-out;

  &:hover,
  &:focus {
    color: #c6bfbf;
  }

  @media screen and (min-width: 1440px) {
    & {
      margin-right: 26px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 744px) {
    & {
      justify-content: start;
      gap: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      gap: 20px;
    }
  }
`;

export const FavLogWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FavLink = styled(Link)`
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;

  transition: color 250ms ease-out;

  &:hover,
  &:focus {
    color: #c6bfbf;
  }

  @media screen and (min-width: 744px) {
    & {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 35px;
      height: 35px;
    }
  }
`;

export const UserInfoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: #fff;
  color: #000;

  border-radius: 50%;

  overflow: hidden;

  @media screen and (min-width: 744px) {
    & {
      width: 70px;
      height: 70px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Img = styled.img``;

export const LoginLink = styled(Link)`
  color: #fff;

  transition: color 250ms ease-out;

  &:hover,
  &:focus {
    color: #c6bfbf;
  }
`;
