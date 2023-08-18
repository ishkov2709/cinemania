import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import { DetailsLink, FavBtn, Img, ImgWrapper, ListItem, Title } from './Item.styled';
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const Item = ({ id, poster, title }) => {
  const location = useLocation();
  const [loadImg, setLoadImg] = useState(false);

  const handleImgLoad = () => {
    setLoadImg(true);
  };

  return (
    <ListItem>
      <DetailsLink to={`/catalog/${id}`} state={{ from: location }}>
        <ImgWrapper loadImg={loadImg}>
          {!loadImg && (
            <Skeleton
              variant="rectangular"
              width={161}
              height={221}
              animation="wave"
              sx={{ bgcolor: 'rgba(121, 121, 121, 0.7)' }}
            />
          )}

          <Img src={poster} alt={title} width={161} onLoad={handleImgLoad} loadImg={loadImg} />
        </ImgWrapper>

        <FavBtn type="button">
          <AiOutlineHeart size={24} color="#ffffff" />
        </FavBtn>
        <Title>{title}</Title>
      </DetailsLink>
    </ListItem>
  );
};

export default Item;
