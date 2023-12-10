import React from 'react';

import { ContactsInitialValues } from 'components/ContactForm';
import { List, ListItem } from './ContactsList.styled';

const ContactList: React.FC<ContactListProps> = ({ getContacts, onContactDelete }) => {
  const contacts = getContacts() || [];
  return (
    <List>
      {contacts.map((contact, index) => (
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

type ContactListProps = {
  onContactDelete: (p: string) => void;
  getContacts: () => ContactsInitialValues[];
};
