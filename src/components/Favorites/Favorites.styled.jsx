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
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;

  text-align: center;

  margin-bottom: 46px;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

export const EmptyText = styled.p`
  font-size: 18px;
`;
