import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setTime } from '../../../store/modules/condition';

export default function useTime() {
  const dispatch = useDispatch();
  const time = useSelector((state: RootState) => state.condition.time);

  const onToggleTime = useCallback((close?: boolean) => {
    dispatch(
      setTime({
        condition: {
          visible: close ? false : !time.visible,
          value: close ? '' : time.value,
          sort: time.sort,
        },
      })
    );
  }, []);

  const onChangeTime = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setTime({
          condition: {
            visible: time.visible,
            value: e.target.value,
            sort: time.sort,
          },
        })
      );
    },
    [time]
  );

  return {
    time,
    onToggleTime,
    onChangeTime,
  };
}
