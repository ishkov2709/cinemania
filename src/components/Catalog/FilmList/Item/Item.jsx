import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import { DetailsLink, FavBtn, Img, ImgWrapper, ListItem, Title } from './Item.styled';
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, delAsFav } from '../../../../store/auth/authSlice';
import { putUserdata } from '../../../../store/auth/operations';

const Item = ({ id, poster_path, title }) => {
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

  const handleAddFavClick = e => {
    e.preventDefault();
    dispatch(addToFav({ id, poster_path, title }));
    if (email !== 'guest')
      dispatch(putUserdata({ userId, email, films: [...favFilms, { id, poster_path, title }] }));
  };

  const handleDelFavClick = e => {
    e.preventDefault();
    dispatch(delAsFav(id));
    if (email !== 'guest')
      dispatch(putUserdata({ userId, email, films: [...favFilms.filter(el => el.id !== id)] }));
  };

  return (
    <ListItem>
      <DetailsLink to={`/catalog/${id}`} state={{ from: location }}>
        <ImgWrapper loadImg={loadImg}>
          {!loadImg && (
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{
                bgcolor: 'rgba(121, 121, 121, 0.7)',
                width: 'inherit',
                height: 'inherit',
              }}
            />
          )}

          <Img src={poster_path} alt={title} onLoad={handleImgLoad} loadImg={loadImg} />
        </ImgWrapper>
        {isLoggedIn && !favFilms?.find(el => el.id === id) && (
          <FavBtn type="button" onClick={handleAddFavClick}>
            <AiOutlineHeart
              color="#ffffff"
              style={{
                width: 'inherit',
                height: 'inherit',
              }}
            />
          </FavBtn>
        )}

        {isLoggedIn && favFilms?.find(el => el.id === id) && (
          <FavBtn type="button" onClick={handleDelFavClick}>
            <AiFillHeart
              color="#881313"
              style={{
                width: 'inherit',
                height: 'inherit',
              }}
            />
          </FavBtn>
        )}
        <Title>{title}</Title>
      </DetailsLink>
    </ListItem>
  );
};

export default Item;
