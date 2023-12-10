import styled from '@emotion/styled';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  padding: 10px;
  border: solid 1px green;
  border-radius: 8px;

  input {
    margin-bottom: 8px;
  }
`;
