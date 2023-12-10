import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;

export const getFilter = (state: RootState) => state.filter;
