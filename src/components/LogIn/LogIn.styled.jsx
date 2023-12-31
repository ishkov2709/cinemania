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

  min-height: 100%;

  padding: 200px 35px;

  background-color: #fff;

  border-radius: 12px;

  @media screen and (min-width: 744px) {
    & {
      padding: 190px 120px;
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

export const Title = styled.h2`
  font-weight: 400;
  font-size: 36px;

  color: #000;

  margin-bottom: 18px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 64px;

      margin-bottom: 24px;
    }
  }
`;

export const GuestBtn = styled.button`
  margin-top: 12px;

  background: transparent;
  color: #6469dc;

  border: none;

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #14165a;
  }

  @media screen and (min-width: 744px) {
    & {
      margin-top: 18px;
    }
  }
`;
