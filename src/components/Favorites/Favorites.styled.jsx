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
      max-width: none;
      width: 744px;

      padding: 0 74px;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;

  text-align: center;

  margin-bottom: 46px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 40px;
    }
  }
`;

export const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;

  margin-bottom: 60px;

  @media screen and (min-width: 744px) {
    & {
      gap: 26px;

      margin-bottom: 100px;
    }
  }
`;

export const EmptyText = styled.p`
  font-size: 18px;

  @media screen and (min-width: 744px) {
    & {
      font-size: 26px;
    }
  }
`;
