import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';
import {
  Header,
  Container,
  StyledLink,
  NavUlHeader,
  NavDivHeader,
  LogOutHeader,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavUlHeader>
              <li>
                <NavDivHeader>
                  <StyledLink to="/">Home</StyledLink>
                  <StyledLink to="/contacts">Contacts</StyledLink>
                </NavDivHeader>
              </li>
              <li>
                <NavDivHeader>
                  <StyledLink to="/register">Register</StyledLink>
                  <StyledLink to="/login">Login</StyledLink>
                </NavDivHeader>
              </li>
              <li>
                <LogOutHeader type="button">Log Out</LogOutHeader>
              </li>
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
