import React, { useState } from 'react';
import Notiflix from 'notiflix';

import ContactForm, { ContactsInitialValues } from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { Wrapper } from './App.styled';
import { useLocalStorage } from 'utils/useLocalStorage';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');

  const onSubmitForm = (values: ContactsInitialValues) => {
    const { name } = values;
    const existName = contacts.find(
      (contact: ContactsInitialValues) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existName) {
      return Notiflix.Notify.failure(`${name} is already in contacts.`);
    }

    setContacts((prevState: ContactsInitialValues[]) => {
      return [...prevState, values];
    });
  };

  const onContactDelete = (contactId: string) => {
    setContacts((prevContacts: ContactsInitialValues[]) =>
      [...prevContacts].filter(contact => contact.id !== contactId)
    );
  };

  const onFilterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    if (!filter) return [...contacts];

    const contactToLowerCase = filter.toLowerCase();
    return [...contacts].filter(contact => contact.name.toLowerCase().includes(contactToLowerCase));
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={onSubmitForm} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterList={onFilterList} />
      <ContactList getContacts={getFilteredContacts} onContactDelete={onContactDelete} />
    </Wrapper>
  );
};

export default App;
