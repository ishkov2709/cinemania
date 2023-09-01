import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 744px) {
    & {
      gap: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      gap: 80px;
    }
  }
`;

export const Btn = styled.button`
  min-width: calc((100% - 28px) / 3);
  padding: 8px;

  background-color: #fff;
  color: #000;

  border: 1px solid #000;
  border-radius: 8px;

  font-weight: 400;
  font-size: 10px;

  text-align: center;
  text-decoration: none;

  @media screen and (min-width: 744px) {
    & {
      min-width: calc((100% - 48px) / 3);
      padding: 18px 8px;
      font-size: 16px;

      border-radius: 12px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      min-width: calc((100% - 160px) / 3);
      padding: 30px;
      font-size: 24px;
    }
  }
`;
