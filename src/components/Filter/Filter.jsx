import React from 'react';
import { usePhonebook } from 'redux/usePhonebook';

const Filter = () => {
  const { filterContact } = usePhonebook();
  return (
    <>
      <label>
        <input onChange={evt => filterContact(evt.target.value)} />
      </label>
    </>
  );
};

export default Filter;
