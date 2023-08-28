import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Suspense } from 'react';
import { CustomWrapper, MainWrapper } from './SharedLayout.styled';
import { TailSpin } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <MainWrapper>
      <Header />
      <CustomWrapper>
        <Suspense
          fallback={
            <TailSpin
              height="80"
              width="80"
              color="#08B275"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{ padding: '40px 0', display: 'flex', justifyContent: 'center' }}
              wrapperClass=""
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </CustomWrapper>
    </MainWrapper>
  );
};

export default SharedLayout;
