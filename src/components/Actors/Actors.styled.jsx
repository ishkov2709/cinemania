import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-bottom: 24px;

  overflow: scroll;
`;

export const Container = styled.div``;

export const PageWrapper = styled.div`
  position: relative;

  padding: 76px 12px 54px 12px;

  min-height: calc(100vh - 134px);

  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);

  border-radius: 12px;
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 12px;
  left: 12px;

  color: #000;
`;

export const CloseLink = styled(Link)`
  position: absolute;
  top: 12px;
  right: 12px;

  color: #000;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

export const Item = styled.li`
  background-color: rgb(255, 255, 255);
  color: #000;

  width: 147px;

  overflow: hidden;

  border: 1px solid #000;
  border-radius: 8px;
`;

export const ImgWrapper = styled.div`
  width: 147px;
  height: 158px;

  overflow: hidden;
`;

export const Img = styled.img``;

export const InitialsWrapper = styled.div`
  padding: 6px 12px 16px 12px;

  text-align: center;
`;

export const HeroName = styled.h4`
  font-weight: 500;
  font-size: 24px;

  margin-bottom: 6px;
`;

export const TrueName = styled.p`
  font-weight: 300;
  font-size: 14px;
`;
