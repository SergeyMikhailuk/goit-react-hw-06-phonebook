import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import * as yup from 'yup';

import { addContact, getContacts } from '../../redux/contactsSlice';

import { Form } from './ContactsForm.styled';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  number: yup
    .string()
    .min(8)
    .max(12)
    .typeError('from 8 to 12 symbols')
    .required('Number is required'),
});

const initialValues: ContactsInitialValues = {
  id: nanoid(),
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (
    values: ContactsInitialValues,
    { resetForm }: FormikHelpers<ContactsInitialValues>
  ) => {
    const { name } = values;
    const existName = contacts.find(
      (contact: ContactsInitialValues) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existName) {
      return Notiflix.Notify.failure(`${name} is already in contacts.`);
    }

    dispatch(addContact(values));
    resetForm({ values: { ...initialValues, id: nanoid() } });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <br />
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" />
        <br />

        <label htmlFor="number">Number</label>
        <br />
        <Field id="number" name="number" type="tel" />
        <ErrorMessage name="number" component="div" />
        <br />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

export type ContactsInitialValues = {
  id: string;
  name: string;
  number: string;
};
