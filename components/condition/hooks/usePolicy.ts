import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setPolicy } from '../../../store/modules/condition';

export default function usePolicy() {
  const dispatch = useDispatch();
  const policy = useSelector((state: RootState) => state.condition.policy);

  const onTogglePolicy = useCallback((close?: boolean) => {
    dispatch(
      setPolicy({
        condition: {
          visible: close ? false : !policy.visible,
          value: close ? '' : policy.value,
          sort: policy.sort,
        },
      })
    );
  }, []);

  const onChangePolicy = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setPolicy({
          condition: {
            visible: policy.visible,
            value: e.target.value,
            sort: policy.sort,
          },
        })
      );
    },
    [policy]
  );

  return {
    policy,
    onTogglePolicy,
    onChangePolicy,
  };
}
