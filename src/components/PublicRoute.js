import { Navigate, Outlet } from 'react-router-dom';
import { usePhonebook } from 'redux/usePhonebook';

export default function PublicRoute() {
  const { isLoggedIn } = usePhonebook();
  return !isLoggedIn ? <Outlet /> : <Navigate to="/contacts" />;
  // <Route {...routeProps}>
  //   {isLoggedIn ? children : <Navigate to="/" />}
  // </Route>
}
