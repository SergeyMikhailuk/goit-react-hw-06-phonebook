import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter, setFilter } from '../../redux/filterSlice';

import { Input, Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={onFilterList} />
    </Label>
  );
};

export default Filter;
