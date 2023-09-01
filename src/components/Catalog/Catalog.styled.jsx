import styled from '@emotion/styled';

export const Section = styled.section``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 743px) {
    & {
      max-width: 390px;
    }
  }

  @media screen and (min-width: 744px) {
    & {
      gap: 140px;
      max-width: none;
      width: 744px;

      padding: 0 74px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      gap: 90px;
      width: 1440px;

      padding: 0 142px;
    }
  }
`;
