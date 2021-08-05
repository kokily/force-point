import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setAgentTime } from '../../../store/modules/condition';

export default function useAgentTime() {
  const dispatch = useDispatch();
  const agentTime = useSelector(
    (state: RootState) => state.condition.agentTime
  );

  const onToggleAgentTime = useCallback((close?: boolean) => {
    dispatch(
      setAgentTime({
        condition: {
          visible: close ? false : !agentTime.visible,
          value: close ? '' : agentTime.value,
          sort: agentTime.sort,
        },
      })
    );
  }, []);

  const onChangeAgentTime = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setAgentTime({
          condition: {
            visible: agentTime.visible,
            value: e.target.value,
            sort: agentTime.sort,
          },
        })
      );
    },
    [agentTime]
  );

  return {
    agentTime,
    onToggleAgentTime,
    onChangeAgentTime,
  };
}
