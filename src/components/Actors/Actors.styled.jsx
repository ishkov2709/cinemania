import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-bottom: 24px;

  @media screen and (min-width: 744px) {
    & {
      padding-bottom: 120px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      padding-bottom: 90px;
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

  @media screen and (min-width: 1440px) {
    & {
      width: 1440px;

      padding: 0 142px;
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

  @media screen and (min-width: 1440px) {
    & {
      padding: 116px 104px 80px 128px;
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
