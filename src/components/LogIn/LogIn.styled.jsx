import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-bottom: 24px;

  overflow: scroll;
`;

export const Container = styled.div`
  max-width: 390px;
`;

export const ContentBox = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 66px 35px 18px 35px;

  min-height: calc(100vh - 134px);

  background-color: #fff;

  border-radius: 12px;
`;

export const CloseLink = styled(Link)`
  position: absolute;
  top: 12px;
  right: 12px;
  color: #000;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 36px;

  color: #000;

  margin-bottom: 18px;
`;

export const GuestBtn = styled.button`
  margin-top: 12px;

  background: transparent;
  color: #6469dc;

  border: none;
`;
