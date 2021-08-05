import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ChastityType = {
  currentPage: number;
  lastPage: number;
  counter: number;
  evidenceType: 'ALL' | 'EVENT' | 'COLLECTION';
};

export type ChastityPayload = {
  chastity: ChastityType;
};

const initialState: ChastityType = {
  currentPage: 0,
  lastPage: 0,
  counter: 20,
  evidenceType: 'ALL',
};

const chastitySlice = createSlice({
  name: 'chastity',
  initialState,
  reducers: {
    setChastity(state: ChastityType, action: PayloadAction<ChastityPayload>) {
      state.currentPage = action.payload.chastity.currentPage;
      state.lastPage = action.payload.chastity.lastPage;
      state.counter = action.payload.chastity.counter;
      state.evidenceType = action.payload.chastity.evidenceType;
    },
  },
});

const { reducer, actions } = chastitySlice;

export const { setChastity } = actions;

export default reducer;
