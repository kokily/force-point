import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setUser } from '../../../store/modules/condition';

export default function useUser() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.condition.user);

  const onToggleUser = useCallback((close?: boolean) => {
    dispatch(
      setUser({
        condition: {
          visible: close ? false : !user.visible,
          value: close ? '' : user.value,
          sort: user.sort,
        },
      })
    );
  }, []);

  const onChangeUser = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setUser({
          condition: {
            visible: user.visible,
            value: e.target.value,
            sort: user.sort,
          },
        })
      );
    },
    [user]
  );

  return {
    user,
    onToggleUser,
    onChangeUser,
  };
}
