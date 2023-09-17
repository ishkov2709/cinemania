import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-bottom: 78px;

  margin: auto 0;

  @media screen and (min-width: 744px) {
    & {
      padding-bottom: 100px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      height: 100%;
      margin: 0;
      padding-bottom: 24px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 744px) {
    & {
      gap: 60px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      height: 100%;
      justify-content: space-between;
      gap: 0;
    }
  }
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 46px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 82px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      font-size: 42px;
    }
  }
`;

export const Icon = styled.span`
  width: 100px;
  height: 100px;

  @media screen and (min-width: 744px) {
    & {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 75px;
      height: 75px;
    }
  }
`;

export const BtnCatalog = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 18px 30px;

  background-color: #fff;
  color: #000;

  text-decoration: none;

  border: 1px solid #000;
  border-radius: 8px;

  transition: background-color 250ms ease-out;

  &:hover,
  &:focus {
    background-color: #c6bfbf;
  }

  @media screen and (min-width: 744px) {
    & {
      padding: 22px 36px;

      font-size: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      margin: 0 0 0 auto;

      font-size: 20px;
    }
  }
`;
