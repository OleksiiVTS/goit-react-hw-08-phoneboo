import PropTypes from 'prop-types';
import React from 'react';
import { usePhonebook } from 'redux/usePhonebook';
import css from './ContactItem.module.css';
import { useNavigate } from 'react-router-dom';

const ContactItem = ({ id, name, number }) => {
  const { deleteContacts, getUpdateContacts } = usePhonebook();
  const navigate = useNavigate();

  const update = contactData => {
    getUpdateContacts(contactData);
    navigate('update');
  };

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <div className={css.itemsButton}>
        <button
          type="button"
          title="Update contact"
          onClick={() => update({ id, name, number })}
        >
          ✎
        </button>
        <button
          type="button"
          title="Delete contact"
          onClick={() => deleteContacts(id)}
        >
          &times;
        </button>
      </div>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
