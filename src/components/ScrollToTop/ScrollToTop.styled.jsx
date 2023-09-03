import styled from '@emotion/styled';

export const Btn = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;

  background: transparent;
  color: #fff;
  border: none;

  z-index: 1000;

  animation: arrowTransition 2000ms linear infinite;

  transition: color 250ms ease-in-out, transform 250ms ease-in-out, bottom 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.3);
    color: #960505;

    animation-play-state: paused;
  }
`;
