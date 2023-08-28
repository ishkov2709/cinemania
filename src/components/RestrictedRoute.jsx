import { useSelector } from 'react-redux';
import Favorites from './Favorites/Favorites';
import LogIn from './LogIn/LogIn';

const RestrictedRoute = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <Favorites /> : <LogIn />;
};

export default RestrictedRoute;
