import { useSelector } from 'react-redux';
import LogIn from './LogIn';
import UserInfo from './UserInfo';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return !isLoggedIn ? <LogIn /> : <UserInfo />;
};

export default PrivateRoute;
