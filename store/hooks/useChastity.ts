import { PayloadAction } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { ChastityPayload, setChastity } from '../modules/chastity';

export default function useChastity() {
  const dispatch = useDispatch();
  const chastity = useSelector((state: RootState) => state.chastity);

  // currentPage: 0,
  // lastPage: 0,
  // counter: 20,
  // evidenceType: 'ALL',

  const onChangeChastity = useCallback(
    (data: PayloadAction<ChastityPayload>) => {
      setChastity(data.payload);
    },
    []
  );

  return {
    currentPage: chastity.currentPage,
    lastPage: chastity.lastPage,
    counter: chastity.counter,
    evidenceType: chastity.evidenceType,
    onChangeChastity,
  };
}
