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
  gap: 12px;

  padding: 66px 35px 18px 35px;

  min-height: calc(100vh - 134px);

  background-color: #fff;
  color: #000;

  border-radius: 12px;
`;

export const CloseLink = styled(Link)`
  position: absolute;
  top: 12px;
  right: 12px;
  color: #000;
`;

export const ImgWrapper = styled.div`
  border: 8px solid #000;
  border-radius: 50%;

  overflow: hidden;
`;

export const Img = styled.img``;

export const Name = styled.h2`
  font-weight: 400;
  font-size: 18px;

  margin-bottom: 12px;
`;

export const LogOutBtn = styled.button`
  width: 215px;

  padding: 8px;

  background: transparent;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 24px;

  border: 1px solid #000;
  border-radius: 4px;
`;
