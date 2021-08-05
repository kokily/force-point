import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setMatches } from '../../../store/modules/condition';

export default function useMatches() {
  const dispatch = useDispatch();
  const matches = useSelector((state: RootState) => state.condition.matches);

  const onToggleMatches = useCallback((close?: boolean) => {
    dispatch(
      setMatches({
        condition: {
          visible: close ? false : !matches.visible,
          value: close ? '' : matches.value,
          sort: matches.sort,
        },
      })
    );
  }, []);

  const onChangeMatches = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setMatches({
          condition: {
            visible: matches.visible,
            value: e.target.value,
            sort: matches.sort,
          },
        })
      );
    },
    [matches]
  );

  return {
    matches,
    onToggleMatches,
    onChangeMatches,
  };
}
