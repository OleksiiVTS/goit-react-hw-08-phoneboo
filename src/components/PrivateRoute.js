import { Navigate, Outlet } from 'react-router-dom';
import { useContacts } from 'redux/useContacts';

export default function PrivateRoute() {
  const { isLoggedIn } = useContacts();
  return isLoggedIn ? <Outlet /> : <Navigate to="/contacts" />;
  // <Route {...routeProps}>
  //   {isLoggedIn ? children : <Navigate to="/contacts" />}
  // </Route>
}
