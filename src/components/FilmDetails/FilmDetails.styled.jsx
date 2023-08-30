import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';
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
      max-width: 744px;
    }
  }
`;

export const ContentBox = styled.div`
  position: relative;

  padding: 66px 35px 18px 35px;

  min-height: calc(100vh - 134px);

  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);

  border-radius: 12px;

  @media screen and (min-width: 744px) {
    & {
      padding: 60px 120px 100px 120px;
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
  position: relative;
  margin-bottom: 30px;

  width: 100%;
  max-height: 153px;

  border-radius: 8px;

  overflow: hidden;

  @media screen and (min-width: 744px) {
    & {
      max-height: 336px;

      margin-bottom: 24px;
    }
  }
`;

export const Img = styled.img`
  display: ${({ loadImg }) => (loadImg ? 'block' : 'none')};
  width: 100%;
`;

export const YearField = styled.p`
  position: absolute;
  bottom: 12px;
  right: 12px;

  font-weight: 500;
  font-size: 16px;
`;

export const Year = styled.span`
  font-weight: 300;
`;

export const TitleRateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;

  margin-bottom: 6px;

  @media screen and (min-width: 744px) {
    & {
      margin-bottom: 12px;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 32px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 48px;
    }
  }
`;

export const RatingWrapper = styled.div``;

export const Rating = styled.p`
  font-weight: 300;
  font-size: 24px;
`;

export const Description = styled.p`
  color: #000;

  font-weight: 300;
  font-size: 10px;

  margin-bottom: 12px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 20px;

      margin-bottom: 16px;
    }
  }
`;

export const Subtitle = styled.h3`
  color: #000;

  font-weight: 600;
  font-size: 14px;

  margin-bottom: 12px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 24px;

      margin-bottom: 12px;
    }
  }
`;

export const Generes = styled.p`
  color: #000;

  font-size: 14px;

  margin-bottom: 18px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 24px;

      margin-bottom: 24px;
    }
  }
`;

export const ActorsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 146px;
  height: 40px;

  margin: 0 auto;

  color: #000;

  text-decoration: none;

  border: 1px solid #000;
  border-radius: 8px;

  @media screen and (min-width: 744px) {
    & {
      width: 236px;
      height: 60px;

      font-size: 32px;
    }
  }
`;

export const SkeletonLoader = styled(Skeleton)`
  width: 100%;
  height: inherit;
`;
