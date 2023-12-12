import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts, removeContact } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';

import { List, ListItem } from './ContactsList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onContactDelete = (contactId: string) => {
    dispatch(removeContact(contactId));
  };

  const getFilteredContacts = () => {
    if (!filter) return [...contacts];

    const contactToLowerCase = filter.toLowerCase();
    return [...contacts].filter(contact => contact.name.toLowerCase().includes(contactToLowerCase));
  };
  const filteredContacts = getFilteredContacts() || [];

  return (
    <List>
      {filteredContacts.map((contact, index) => (
        <ListItem key={contact.id}>
          <span>{index + 1}</span>
          {contact.name}, {contact.number}
          <button onClick={() => onContactDelete(contact.id)}>delete</button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
