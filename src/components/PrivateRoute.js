import { Navigate, Outlet } from 'react-router-dom';
import { usePhonebook } from 'redux/usePhonebook';

export default function PrivateRoute() {
  const { isLoggedIn } = usePhonebook();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
  // <Route {...routeProps}>
  //   {isLoggedIn ? children : <Navigate to="/contacts" />}
  // </Route>
}
