// import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from 'redux/useContacts';
import css from './Home.module.css';

const Home = () => {
  const { isUser, isLoggedIn } = useContacts();

  return (
    <section>
      <div className={css.homeContainer}>
        {!isLoggedIn ? (
          <div className={css.homeDiv}>
            <h1>
              Please{' '}
              <Link className={css.link} to="/register">
                register
              </Link>{' '}
              or{' '}
              <Link className={css.link} to="/login">
                login
              </Link>
              .
            </h1>
          </div>
        ) : (
          <div className={css.homeDiv}>
            <h1>Hello {isUser?.name}.</h1>
            <h2>
              Would you like to see your{' '}
              <Link className={css.link} to="/contacts">
                {' '}
                contacts
              </Link>
              ?
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
