import React from 'react';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm, { ContactsInitialValues } from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { addContact, getContacts, removeContact } from '../../redux/contactsSlice';
import { getFilter, setFilter } from '../../redux/filterSlice';
import { Wrapper } from './App.styled';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onSubmitForm = (values: ContactsInitialValues) => {
    const { name } = values;
    const existName = contacts.find(
      (contact: ContactsInitialValues) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existName) {
      return Notiflix.Notify.failure(`${name} is already in contacts.`);
    }

    dispatch(addContact(values));
  };

  const onContactDelete = (contactId: string) => {
    dispatch(removeContact(contactId));
  };

  const onFilterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.currentTarget.value));
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
