import styled from '@emotion/styled';

export const Section = styled.section``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  overflow-y: scroll;

  @media screen and (max-width: 743px) {
    & {
      max-width: 390px;
      height: calc(100vh - 110px);
      overflow: scroll;
    }
  }

  @media screen and (min-width: 744px) {
    & {
      gap: 140px;
      max-width: 744px;
      height: calc(100vh - 110px);
      overflow: scroll;

      padding: 0 74px;
    }
  }
`;
