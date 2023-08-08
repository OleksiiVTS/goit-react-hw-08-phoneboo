import { Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import css from './Contacts.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { useContacts } from 'redux/useContacts';
import React from 'react';

const Contacts = () => {
  const { visibleContacts, valueContacts, isLoading, error } = useContacts();

  return (
    <div>
      <Link to={'/'}>&#129044; Back Home</Link>
      <div>
        <section className={css.appSection}>
          <h1>Add Contacts</h1>
          <ContactForm />
        </section>
        <section className={css.appSection}>
          <h2>Contacts</h2>
          <Filter />
          {isLoading && !error && (
            <Circles
              height="80"
              width="80"
              color="#4d78a9"
              wrapperClass={css.loader}
            />
          )}
          {valueContacts.length > 0 && (
            <ContactList listContacts={visibleContacts} />
          )}
        </section>
      </div>
    </div>
  );
};

export default Contacts;
