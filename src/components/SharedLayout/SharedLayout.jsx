import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Suspense, useState } from 'react';
import { CustomWrapper, MainWrapper } from './SharedLayout.styled';
import { TailSpin } from 'react-loader-spinner';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const SharedLayout = () => {
  const [toTopPosition, setToTopPosition] = useState(0);

  const handleScroll = e => {
    setToTopPosition(e.target.scrollTop);
  };

  const handleClick = () => {
    setToTopPosition(0);
    const targetElement = document.querySelector('.main-wrapper');
    targetElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <MainWrapper className="main-wrapper" onScroll={handleScroll}>
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
      {toTopPosition > 50 && <ScrollToTop handler={() => handleClick()} />}
    </MainWrapper>
  );
};

export default SharedLayout;
