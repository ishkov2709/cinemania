import { useSelector } from 'react-redux';
import LogIn from './LogIn/LogIn';

const RestrictedRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? Component : <LogIn />;
};

export default RestrictedRoute;
