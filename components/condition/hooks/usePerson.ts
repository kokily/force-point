import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setPerson } from '../../../store/modules/condition';

export default function usePerson() {
  const dispatch = useDispatch();
  const person = useSelector((state: RootState) => state.condition.person);

  const onTogglePerson = useCallback((close?: boolean) => {
    dispatch(
      setPerson({
        condition: {
          visible: close ? false : !person.visible,
          value: close ? '' : person.value,
          sort: person.sort,
        },
      })
    );
  }, []);

  const onChangePerson = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setPerson({
          condition: {
            visible: person.visible,
            value: e.target.value,
            sort: person.sort,
          },
        })
      );
    },
    [person]
  );

  return {
    person,
    onTogglePerson,
    onChangePerson,
  };
}
