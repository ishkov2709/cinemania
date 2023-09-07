import styled from '@emotion/styled';

export const PagWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 60px;

  @media screen and (min-width: 744px) {
    & {
      margin-bottom: 160px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      justify-content: center;
      gap: 4px;

      margin-bottom: 40px;
    }
  }
`;

export const Counter = styled.span`
  width: 133px;
  height: 40px;

  background: #fff;
  color: #000;

  font-weight: 400;
  font-size: 36px;

  border: 1px solid #000;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 744px) {
    & {
      width: 269px;
      height: 65px;

      font-size: 48px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 220px;
      height: 55px;

      margin-right: 28px;
    }
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  padding: 0;

  background: #fff;
  color: #000;

  border: none;
  border-radius: 8px;

  overflow: hidden;

  &.one {
    padding: 10px;
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 744px) {
    & {
      width: 65px;
      height: 65px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 55px;
      height: 55px;
    }

    &:nth-of-type(2) {
      margin-right: 28px;
    }
  }
`;
