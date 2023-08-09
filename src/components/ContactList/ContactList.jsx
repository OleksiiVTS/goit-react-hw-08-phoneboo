import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import React from 'react';
import css from './ContactItem.module.css';
import { Outlet } from 'react-router-dom';

const ContactList = ({ listContacts }) => {
  return (
    <>
      <ul className={css.listUl}>
        {listContacts.map(listContact => (
          <li className={css.itemContact} key={listContact.id}>
            <ContactItem
              id={listContact.id}
              name={listContact.name}
              number={listContact.number}
            />
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

ContactList.propTypes = {
  listContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};

export default ContactList;
