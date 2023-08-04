import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <Link to={'/'}>&#129044; Go back</Link>
      <br />
      <Link to="/">Home</Link>
      <h1>Register</h1>
      <form>
        <label>
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
        <br />
        <label>
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
        <br />
        <label>
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
        <br />
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};

export default Register;
