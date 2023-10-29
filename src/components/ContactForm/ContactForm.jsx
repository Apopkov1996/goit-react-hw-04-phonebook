import React from 'react';
import formcss from './contactform.module.css';
import { useState } from 'react';

export const ContactForm = ({ addContact }) => {
  // state = {
  //   name: '',
  //   number: '',
  // };

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name: name, number: number });

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={formcss.form}>
      <label className={formcss.label}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={formcss.label}>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={formcss.btn}>
        Add Contact
      </button>
    </form>
  );
};
