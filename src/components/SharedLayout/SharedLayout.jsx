import { Outlet } from 'react-router-dom';
import * as Styled from './SharedLayout.styled';
import Header from '../Header';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <Styled.MainWrapper>
      <Header />
      <Styled.CustomWrapper>
        <Suspense>
          <Outlet />
        </Suspense>
      </Styled.CustomWrapper>
    </Styled.MainWrapper>
  );
};

export default SharedLayout;
