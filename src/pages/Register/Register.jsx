import { Link, useNavigate } from 'react-router-dom';
import { useContacts } from 'redux/useContacts';
import css from './Register.module.css';

const Register = () => {
  const { createNewUser } = useContacts();
  const navigate = useNavigate();

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.username.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    createNewUser({ name, email, password });
    evt.target.reset();
    navigate('contacts');
  };

  return (
    <section className={css.section}>
      <Link to={'/'}>&#129044; Back Home</Link>
      <div className={css.container}>
        <h1>Register</h1>
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.formDiv}>
            <label className={css.formLabel}>
              Name
              <br />
              <input
                type="text"
                name="username"
                autoComplete="username"
                // pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // pattern="/\[a-zA-Za-яА-Я]{10} [a-zA-Za-яА-Я]{10}/"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label className={css.formLabel}>
              Email <br />
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
                name="password"
                autoComplete="new-password"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
          </div>
          <button className={css.button} type="submit">
            Registration
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
