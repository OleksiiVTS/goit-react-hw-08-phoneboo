import { Link, useNavigate } from 'react-router-dom';
import { useContacts } from 'redux/useContacts';
import css from './Register.module.css';

const Login = () => {
  const { loginNewUser } = useContacts();
  let navigate = useNavigate();

  const handleSubmit = evt => {
    evt.preventDefault();
    const email = evt.target.email.value;
    const password = evt.target.loginPassword.value;
    loginNewUser({ email, password });
    evt.target.reset();
    navigate('contacts');
  };

  return (
    <section className={css.section}>
      <Link to={'/'}>&#129044; Back Home</Link>
      <div className={css.container}>
        <h1>Login</h1>
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.formDiv}>
            <label className={css.formLabel}>
              Login
              <br />
              <input
                type="email"
                name="email"
                autoComplete="email"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <label className={css.formLabel}>
              Password <br />
              <input
                type="password"
                name="loginPassword"
                autoComplete="current-password"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
          </div>
          <button className={css.button} type="submit">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
