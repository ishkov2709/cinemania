import styled from '@emotion/styled';

export const Btn = styled.button`
  position: fixed;
  bottom: 125px;
  right: 25px;

  width: 85px;
  height: 85px;

  background: transparent;
  color: #cecece;
  border: none;

  z-index: 1000;

  animation: arrowMobTransition 2000ms linear infinite;

  transition: color 250ms ease-in-out, transform 250ms ease-in-out, bottom 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.3);
    color: #960505;

    animation-play-state: paused;
  }

  @media screen and (min-width: 744px) {
    bottom: 225px;

    width: 105px;
    height: 105px;

    animation: arrowTabTransition 2000ms linear infinite;
  }

  @media screen and (min-width: 1440px) {
    bottom: 150px;

    animation: arrowDesktopTransition 2000ms linear infinite;
  }
`;
