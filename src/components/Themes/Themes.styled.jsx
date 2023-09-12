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

  height: 100%;

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

  min-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 150px 10px;

  background-color: #fff;
  color: #000;

  border-radius: 12px;
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
`;
