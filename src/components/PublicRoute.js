import { Navigate, Outlet } from 'react-router-dom';
import { useContacts } from 'redux/useContacts';

export default function PublicRoute() {
  const { isLoggedIn } = useContacts();
  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
  // <Route {...routeProps}>
  //   {isLoggedIn ? children : <Navigate to="/" />}
  // </Route>
}
