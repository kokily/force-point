import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setGroup } from '../../../store/modules/condition';

export default function useGroup() {
  const dispatch = useDispatch();
  const group = useSelector((state: RootState) => state.condition.group);

  const onToggleGroup = useCallback((close?: boolean) => {
    dispatch(
      setGroup({
        condition: {
          visible: close ? false : !group.visible,
          value: close ? '' : group.value,
          sort: group.sort,
        },
      })
    );
  }, []);

  const onChangeGroup = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setGroup({
          condition: {
            visible: group.visible,
            value: e.target.value,
            sort: group.sort,
          },
        })
      );
    },
    [group]
  );

  return {
    group,
    onToggleGroup,
    onChangeGroup,
  };
}
