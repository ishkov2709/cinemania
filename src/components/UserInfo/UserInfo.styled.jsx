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
  gap: 12px;

  padding: 104px 46px;

  min-height: calc(100vh - 134px);

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
  color: #000;

  @media screen and (min-width: 744px) {
    & {
      top: 24px;
      right: 24px;
    }
  }
`;

export const ImgWrapper = styled.div`
  border: 8px solid #000;
  border-radius: 50%;

  overflow: hidden;
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

  @media screen and (min-width: 744px) {
    & {
      font-size: 32px;
    }
  }
`;
