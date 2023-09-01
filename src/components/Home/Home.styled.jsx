import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-bottom: 78px;

  margin-top: auto;

  @media screen and (min-width: 744px) {
    & {
      padding-bottom: 100px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      padding-bottom: 24px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HeroTitle = styled(Typography)`
  font-family: 'Rubik';
  font-size: 32px;
  font-weight: 700;

  @media screen and (min-width: 744px) {
    & {
      font-size: 64px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      margin-left: 118px;
    }
  }
`;

export const HeroText = styled(Typography)`
  font-family: 'Rubik';
  font-size: 20px;
  font-weight: 300;

  @media screen and (min-width: 744px) {
    & {
      font-size: 32px;

      margin-bottom: 100px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 796px;

      margin-left: 118px;
    }
  }
`;

export const BtnCatalog = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 197px;
  height: 48px;

  background-color: #fff;
  color: #000;

  text-decoration: none;

  border: 1px solid #000;
  border-radius: 8px;

  @media screen and (min-width: 744px) {
    & {
      width: 333px;
      height: 90px;

      font-size: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      margin: 0 0 0 auto;
    }
  }
`;
