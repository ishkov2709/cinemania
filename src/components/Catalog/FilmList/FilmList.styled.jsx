import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 20px;

  margin: 0 auto 36px auto;

  @media screen and (max-width: 389px) {
    & {
      justify-content: center;
    }
  }
`;
