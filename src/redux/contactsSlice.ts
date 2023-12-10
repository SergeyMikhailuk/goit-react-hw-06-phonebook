import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ContactsInitialValues } from 'components/ContactForm';

import { RootState } from './store';

const initialState: ContactsInitialValues[] = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactsInitialValues>) => {
      state.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<string>) => {
      return state.filter(c => c.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const getContacts = (state: RootState) => state.contacts;
