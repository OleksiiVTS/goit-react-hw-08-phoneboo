import React from 'react';
import { usePhonebook } from 'redux/usePhonebook';
import css from './Update.module.css';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const { updateContacts, getContacts, getUpdate } = usePhonebook();
  let navigate = useNavigate();
  const { id, name, number } = getUpdate;

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const number = evt.target.number.value;
    updateContacts({ id, name, number });
    window.setTimeout(() => getContacts(), [100]); // явно костиль ))
    // getContacts();
    evt.target.reset();
    navigate('/contacts');
  };

  const exit = event => {
    event.target.tagName === 'DIV' && navigate('/contacts');
  };

  return (
    <>
      <div className={css.container} onClick={event => exit(event)}>
        <div>
          <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.formDiv}>
              <label className={css.formLabel}>
                Name
                <br />
                <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  // pattern="/\[a-zA-Za-яА-Я]{10} [a-zA-Za-яА-Я]{10}/"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  defaultValue={name}
                  required
                />
              </label>
              <label className={css.formLabel}>
                Number <br />
                <input
                  type="tel"
                  name="number"
                  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  defaultValue={number}
                  required
                />
              </label>
            </div>
            <button className={css.button} type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
