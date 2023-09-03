import styled from '@emotion/styled';

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

  @media screen and (min-width: 1440px) {
    & {
      gap: 20px;
    }
  }
`;
