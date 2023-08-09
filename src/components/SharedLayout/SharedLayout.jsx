import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import { useContacts } from 'redux/useContacts';
import css from '../Loader/Loader.module.css';
import {
  Header,
  Container,
  StyledLink,
  NavUlHeader,
  NavDivHeader,
  LogOutHeader,
  NavLiHeader,
} from './SharedLayout.styled';

const SharedLayout = () => {
  const { logoutNewUser, isLoggedIn, isUser } = useContacts();
  let navigate = useNavigate();

  const logOut = () => {
    logoutNewUser();
    navigate('/');
  };

  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavUlHeader>
              <li>
                <NavDivHeader>
                  <StyledLink to="/">Home</StyledLink>
                  {isLoggedIn && (
                    <StyledLink to="contacts">Contacts</StyledLink>
                  )}
                </NavDivHeader>
              </li>
              {!isLoggedIn && (
                <li>
                  <NavDivHeader>
                    <StyledLink to="register">Register</StyledLink>
                    <StyledLink to="login">Login</StyledLink>
                  </NavDivHeader>
                </li>
              )}
              {isLoggedIn && (
                <NavLiHeader>
                  <p>{isUser.email}</p>
                  <LogOutHeader type="button" onClick={logOut}>
                    Log Out
                  </LogOutHeader>
                </NavLiHeader>
              )}
            </NavUlHeader>
          </nav>
        </Container>
      </Header>
      <main>
        <Suspense
          fallback={
            <Circles
              height="80"
              width="80"
              color="#4d78a9"
              wrapperClass={css.loader}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
