// import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from 'redux/useContacts';

const Home = () => {
  const { getNewUser, error, isUser } = useContacts();

  useEffect(() => {
    getNewUser();
  }, [getNewUser]);

  return (
    <section>
      {error ? (
        <div>
          <h1>
            Please <Link to="/register">register</Link> or{' '}
            <Link to="/login">login</Link>.
          </h1>
        </div>
      ) : (
        <div>
          <h1>Hello {isUser?.name}.</h1>
          <h2>
            Would you like to see your <Link to="/contacts"> contacts</Link>?
          </h2>
        </div>
      )}
    </section>
  );
};

export default Home;
