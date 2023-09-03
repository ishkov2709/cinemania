import { Skeleton } from '@mui/material';
import { HeroName, Img, ImgWrapper, InitialsWrapper, ItemWrapper, TrueName } from './Item.styled';
import { useState } from 'react';

const Item = ({ character, profile_path, name }) => {
  const [loadImg, setLoadImg] = useState(false);

  const handleLoadImg = () => {
    setLoadImg(true);
  };

  const changeWidthSkeletonLoader = () => {
    if (window.innerWidth >= 1440) return 168;
    if (window.innerWidth >= 744) return 204;
    if (window.innerWidth < 744) return 147;
  };

  const changeHeightSkeletonLoader = () => {
    if (window.innerHeight >= 1440) return 301;
    if (window.innerHeight >= 744) return 316;
    if (window.innerHeight < 744) return 158;
  };

  return (
    <ItemWrapper>
      <ImgWrapper>
        <Img
          src={profile_path}
          width={changeWidthSkeletonLoader()}
          loadImg={loadImg}
          onLoad={handleLoadImg}
        />
        {!loadImg && (
          <Skeleton
            variant="rectangular"
            width={changeWidthSkeletonLoader()}
            height={changeHeightSkeletonLoader()}
            animation="wave"
            sx={{ bgcolor: 'rgba(121, 121, 121, 0.7)' }}
          />
        )}
      </ImgWrapper>
      <InitialsWrapper>
        <HeroName>{character}</HeroName>
        <TrueName>{name}</TrueName>
      </InitialsWrapper>
    </ItemWrapper>
  );
};

export default Item;
