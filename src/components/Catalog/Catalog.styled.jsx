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

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const Btn = styled.button`
  min-width: calc((100% - 28px) / 3);
  padding: 8px;
  border: 1px solid #000;
  border-radius: 8px;

  font-weight: 400;
  font-size: 10px;
`;
