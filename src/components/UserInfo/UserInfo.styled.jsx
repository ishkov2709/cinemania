import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-bottom: 24px;

  min-height: 100%;

  @media screen and (min-width: 744px) {
    & {
      padding-bottom: 75px;
    }
  }
`;

export const Container = styled.div`
  max-width: 390px;

  min-height: 100%;

  @media screen and (min-width: 744px) {
    & {
      max-width: none;
      width: 744px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 1156px;
    }
  }
`;

export const ContentBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  min-height: 100%;

  padding: 104px 46px;

  background-color: #fff;
  color: #000;

  border-radius: 12px;

  @media screen and (min-width: 744px) {
    & {
      padding: 135px 80px;
    }
  }
`;

export const CloseLink = styled(Link)`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 30px;
  height: 30px;

  color: #000;

  @media screen and (min-width: 744px) {
    & {
      top: 24px;
      right: 24px;

      width: 50px;
      height: 50px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 40px;
      height: 40px;
    }
  }
`;

export const ImgWrapper = styled.div`
  display: flex;

  width: 210px;
  height: 210px;

  border: 8px solid #000;
  border-radius: 50%;

  overflow: hidden;

  @media screen and (min-width: 1440px) {
    & {
      width: 150px;
      height: 150px;

      border: 4px solid #000;
    }
  }
`;

export const Img = styled.img``;

export const Name = styled.h2`
  font-weight: 400;
  font-size: 18px;

  margin-bottom: 12px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 28px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      font-size: 18px;
    }
  }
`;

export const LogOutBtn = styled.button`
  width: 215px;

  padding: 8px;

  background: transparent;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 24px;

  border: 1px solid #000;
  border-radius: 4px;

  transition: background 250ms ease-in;

  &:hover,
  &:focus {
    background: #e8e8e8;
  }

  @media screen and (min-width: 744px) {
    & {
      font-size: 32px;
    }
  }
`;

export const Themes = styled(Link)`
  width: 215px;

  padding: 8px;

  background: transparent;
  color: #000000;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 24px;

  border: 1px solid #000;
  border-radius: 4px;

  text-decoration: none;
  text-align: center;

  transition: background 250ms ease-in;

  &:hover,
  &:focus {
    background: #e8e8e8;
  }

  @media screen and (min-width: 744px) {
    & {
      font-size: 32px;
    }
  }
`;
