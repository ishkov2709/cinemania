import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-bottom: 24px;

  @media screen and (min-width: 744px) {
    & {
      padding-bottom: 75px;
    }
  }
`;

export const Container = styled.div`
  max-width: 390px;

  @media screen and (min-width: 744px) {
    & {
      max-width: none;
      width: 744px;
    }
  }
`;

export const ContentBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 200px 35px;

  min-height: calc(100vh - 134px);

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
  color: #000;
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

  @media screen and (min-width: 744px) {
    & {
      margin-top: 18px;
    }
  }
`;
