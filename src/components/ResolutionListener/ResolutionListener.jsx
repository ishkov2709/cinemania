import React, { useEffect, useState } from 'react';

const ResolutionListener = ({ component: Component, position }) => {
  const [resolution, setResolution] = useState(window.innerWidth);

  const handleResolutionChange = () => {
    setResolution(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResolutionChange);

    return () => {
      window.removeEventListener('resize', handleResolutionChange);
    };
  }, []);

  if (position === 'header' && resolution >= 744)
    return (
      <>
        <Component />
      </>
    );

  if ((position === 'home' && resolution < 744) || (position === 'catalog' && resolution < 744))
    return (
      <>
        <Component />
      </>
    );
};

export default ResolutionListener;
