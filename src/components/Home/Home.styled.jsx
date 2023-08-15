import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-bottom: 78px;

  margin-top: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BtnCatalog = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 197px;
  height: 48px;

  background-color: #fff;
  color: #000;

  text-decoration: none;

  border: 1px solid #000;
  border-radius: 8px;
`;
