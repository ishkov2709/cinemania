import { Skeleton } from '@mui/material';
import { HeroName, Img, ImgWrapper, InitialsWrapper, ItemWrapper, TrueName } from './Item.styled';
import { useState } from 'react';

const Item = ({ character, profile_path, name }) => {
  const [loadImg, setLoadImg] = useState(false);

  const handleLoadImg = () => {
    setLoadImg(true);
  };

  return (
    <ItemWrapper>
      <ImgWrapper>
        <Img src={profile_path} width={147} loadImg={loadImg} onLoad={handleLoadImg} />
        {!loadImg && (
          <Skeleton
            variant="rectangular"
            width={147}
            height={158}
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
