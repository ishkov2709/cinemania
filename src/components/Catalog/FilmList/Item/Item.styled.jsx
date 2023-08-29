import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListItem = styled.li``;

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
  border-radius: 8px;

  overflow: hidden;

  @media screen and (min-width: 744px) {
    width: 272px;
    height: 400px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: ${({ loadImg }) => (loadImg ? 'rgba(0, 0, 0, 0.5)' : 'none')};
  }
`;

export const Img = styled.img`
  display: ${({ loadImg }) => (loadImg ? 'block' : 'none')};
`;

export const FavBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;

  padding: 0;

  background: transparent;

  border: none;
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
`;
