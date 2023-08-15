import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  position: relative;
  min-height: 100vh;

  @media screen and (max-width: 743px) {
    & {
      display: flex;
      flex-direction: column;

      animation: changeBgMobFirstTheme 10s infinite linear;
    }
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));

    pointer-events: none;
  }
`;

export const CustomWrapper = styled.main`
  position: relative;
  z-index: 2;

  height: calc(100vh - 110px);

  display: flex;
  flex-direction: column;
`;
