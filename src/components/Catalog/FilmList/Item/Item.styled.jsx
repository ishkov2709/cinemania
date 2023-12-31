import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  position: relative;

  border-radius: 8px;
`;

export const DetailsLink = styled(Link)`
  display: block;

  position: relative;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.urlbg});
  background-size: cover;

  color: inherit;

  width: 161px;
  height: 221px;

  border: 1px solid #828282;
  border-radius: inherit;

  overflow: hidden;

  @media screen and (min-width: 744px) {
    width: 272px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    height: 300px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  border-radius: inherit;

  overflow: hidden;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: ${({ loadImg }) => (loadImg ? 'rgba(0, 0, 0, 0.5)' : 'none')};
  }

  transform: scale(1);

  transition: transform 250ms ease-in-out 500ms;

  .link-details:hover & {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  display: ${({ loadImg }) => (loadImg ? 'block' : 'none')};
`;

export const FavBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;

  width: 24px;
  height: 24px;

  padding: 0;

  background: transparent;

  border: none;

  & .add {
    color: #ffffff;

    transition: color 250ms ease-in;
  }

  & .delete {
    color: #881313;

    transition: color 250ms ease-in;
  }

  &:hover .add,
  &:hover .delete,
  &:focus .add,
  &:focus .delete {
    color: rgba(136, 19, 19, 0.7);
  }

  @media screen and (min-width: 744px) {
    & {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Title = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 100px;

  font-size: 20px;

  text-align: center;

  @media screen and (min-width: 744px) {
    & {
      font-size: 28px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      font-size: 22px;
    }
  }
`;
