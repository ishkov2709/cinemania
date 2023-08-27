import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import { DetailsLink, FavBtn, Img, ImgWrapper, ListItem, Title } from './Item.styled';
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav } from '../../../../store/auth/authSlice';
import { putUserdata } from '../../../../store/auth/operations';

const Item = ({ id, poster, title }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const favFilms = useSelector(state => state.auth.favFilms);
  const userId = useSelector(state => state.auth.userId);
  const email = useSelector(state => state.auth.email);
  const dispatch = useDispatch();
  const location = useLocation();
  const [loadImg, setLoadImg] = useState(false);

  const handleImgLoad = () => {
    setLoadImg(true);
  };

  const handleFavClick = e => {
    e.preventDefault();
    dispatch(addToFav({ id, poster, title }));
    dispatch(putUserdata({ userId, email, films: [...favFilms, { id, poster, title }] }));
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
        {isLoggedIn && (
          <FavBtn type="button" onClick={handleFavClick}>
            <AiOutlineHeart size={24} color="#ffffff" />
          </FavBtn>
        )}
        <Title>{title}</Title>
      </DetailsLink>
    </ListItem>
  );
};

export default Item;
