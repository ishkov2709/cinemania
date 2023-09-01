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
      padding: 48px 0 120px 0;
    }
  }
`;

export const ToMainLink = styled(Link)`
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
  gap: 12px;
`;

export const FavLink = styled(Link)`
  @media screen and (min-width: 744px) {
    & {
      display: flex;
      justify-content: center;
      align-items: center;
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
`;

export const Img = styled.img``;
