import React from 'react';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import appcss from './app.module.css';
import { useState, useEffect } from 'react';

export const App = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );

  const [filter, setFilter] = useState('');

  // componentDidUpdate(_, prevState) {
  //   if (this.state.contacts !== prevState.contact) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidMount() {
  //   const savedContact = JSON.parse(localStorage.getItem('contacts'));
  //   if (savedContact?.length) {
  //     this.setState({ contacts: savedContact });
  //   }
  // }

  const handleAddContact = data => {
    const { name, number } = data;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts. `);
      return;
    }

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const getContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div className={appcss.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts </h2>
      <Filter
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
      <ContactList
        contacts={getContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
