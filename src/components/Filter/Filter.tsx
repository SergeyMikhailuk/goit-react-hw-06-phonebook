import React from 'react';

import { Input, Label } from './Filter.styled';

const Filter: React.FC<FilterProps> = ({ filter, onFilterList }) => {
  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={onFilterList} />
    </Label>
  );
};

export default Filter;

type FilterProps = {
  filter: string;
  onFilterList: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
