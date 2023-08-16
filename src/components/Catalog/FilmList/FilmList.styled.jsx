import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 20px;

  margin: 0 auto 36px auto;
`;

export const Item = styled.li``;

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

  font-size: 16px;

  text-align: center;
`;
