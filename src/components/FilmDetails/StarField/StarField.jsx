import { useSelector } from 'react-redux';
import { AvarageRating, Item } from './StarField.styled';
import { IoMdStarOutline } from 'react-icons/io';

const StarField = () => {
  const filmDetails = useSelector(state => state.films.filmDetails);
  const { vote_average } = filmDetails;

  const items = [];
  for (let i = 1; i < 6; i += 1) {
    items.push(
      <Item key={i}>
        <IoMdStarOutline color={vote_average / 2 >= i ? '#FFE600' : '#000000'} size={24} />
      </Item>
    );
  }
  if (vote_average) return <AvarageRating>{items}</AvarageRating>;
};

export default StarField;
