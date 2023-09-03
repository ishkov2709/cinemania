import styled from '@emotion/styled';

export const ItemWrapper = styled.li`
  width: 147px;

  background-color: rgba(255, 255, 255, 0.5);
  color: #000;

  overflow: hidden;

  border: 1px solid #000;
  border-radius: 8px;

  @media screen and (min-width: 744px) {
    & {
      width: 204px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 168px;
    }
  }
`;

export const ImgWrapper = styled.div`
  width: 147px;
  height: 158px;

  overflow: hidden;

  @media screen and (min-width: 744px) {
    & {
      width: 204px;
      height: 216px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 168px;
      height: 168px;
    }
  }
`;

export const Img = styled.img``;

export const InitialsWrapper = styled.div`
  padding: 8px 12px;

  text-align: center;
`;

export const HeroName = styled.h4`
  font-weight: 500;
  font-size: 24px;

  margin-bottom: 6px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      font-size: 16px;
    }
  }
`;

export const TrueName = styled.p`
  font-weight: 300;
  font-size: 14px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 16px;
    }
  }
`;
