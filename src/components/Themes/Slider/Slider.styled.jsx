import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 389px) {
    & {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 744px) {
    & {
      gap: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      gap: 32px;
    }
  }
`;

export const Item = styled.li``;

export const Btn = styled.button`
  position: relative;

  margin: 0;
  padding: 0;

  background: transparent;

  border: 1px solid #000000;
  border-radius: 8px;

  overflow: hidden;

  transition: transform 250ms ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(0deg, rgba(65, 65, 65, 0.7), rgba(65, 65, 65, 0.7));

    opacity: 1;

    transition: opacity 250ms ease-in-out;
  }

  &.current {
    transform: scale(1.2);

    z-index: 2;

    transition: transform 250ms ease-in-out 500ms;
  }

  &.current::after {
    content: '';
    opacity: 0;

    transition: opacity 250ms ease-in-out 500ms;
  }
`;
