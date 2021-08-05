import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setApplication } from '../../../store/modules/condition';

export default function useApplication() {
  const dispatch = useDispatch();
  const application = useSelector(
    (state: RootState) => state.condition.application
  );

  const onToggleApplication = useCallback((close?: boolean) => {
    dispatch(
      setApplication({
        condition: {
          visible: close ? false : !application.visible,
          value: close ? '' : application.value,
          sort: application.sort,
        },
      })
    );
  }, []);

  const onChangeApplication = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setApplication({
          condition: {
            visible: application.visible,
            value: e.target.value,
            sort: application.sort,
          },
        })
      );
    },
    [application]
  );

  return {
    application,
    onToggleApplication,
    onChangeApplication,
  };
}
