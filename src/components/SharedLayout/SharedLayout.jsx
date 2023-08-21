import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Suspense } from 'react';
import { CustomWrapper, MainWrapper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <MainWrapper>
      <Header />
      <CustomWrapper>
        <Suspense>
          <Outlet />
        </Suspense>
      </CustomWrapper>
    </MainWrapper>
  );
};

export default SharedLayout;
