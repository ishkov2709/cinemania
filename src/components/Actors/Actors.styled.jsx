import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-bottom: 24px;

  @media screen and (min-width: 744px) {
    & {
      padding-bottom: 120px;
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

export const PageWrapper = styled.div`
  position: relative;

  padding: 76px 12px 54px 12px;

  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);

  border-radius: 12px;

  @media screen and (min-width: 744px) {
    & {
      padding: 136px 18px;
    }
  }
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 12px;
  left: 12px;

  color: #000;

  @media screen and (min-width: 744px) {
    & {
      top: 24px;
      left: 24px;
    }
  }
`;

export const CloseLink = styled(Link)`
  position: absolute;
  top: 12px;
  right: 12px;

  color: #000;

  @media screen and (min-width: 744px) {
    & {
      top: 24px;
      right: 24px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media screen and (max-width: 389px) {
    & {
      justify-content: center;
      width: auto;
    }
  }

  @media screen and (min-width: 390px) {
    & {
      width: 318px;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 744px) {
    & {
      width: 100%;
    }
  }
`;
