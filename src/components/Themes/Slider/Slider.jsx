import { Btn, Item, List } from './Slider.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../store/auth/authSlice';
import ResponsiveImg from './ResponsiveImg/ResponsiveImg';
import sliderImg from '../../../img/index.js';

const Slider = () => {
  const theme = useSelector(state => state.auth.theme);
  const dispatch = useDispatch();

  return (
    <List>
      {sliderImg.map(({ position, mob, tab, desk }, i) => (
        <Item key={position}>
          <Btn
            type="button"
            onClick={() => {
              dispatch(changeTheme(position));
            }}
            className={theme === position ? 'current' : ''}
          >
            <ResponsiveImg mob={mob} tab={tab} desk={desk} />
          </Btn>
        </Item>
      ))}
    </List>
  );
};

export default Slider;
