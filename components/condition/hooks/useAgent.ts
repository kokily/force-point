import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setAgent } from '../../../store/modules/condition';

export default function useAgent() {
  const dispatch = useDispatch();
  const agent = useSelector((state: RootState) => state.condition.agent);

  const onToggleAgent = useCallback((close?: boolean) => {
    dispatch(
      setAgent({
        condition: {
          visible: close ? false : !agent.visible,
          value: close ? '' : agent.value,
          sort: agent.sort,
        },
      })
    );
  }, []);

  const onChangeAgent = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setAgent({
          condition: {
            visible: agent.visible,
            value: e.target.value,
            sort: agent.sort,
          },
        })
      );
    },
    [agent]
  );

  return {
    agent,
    onToggleAgent,
    onChangeAgent,
  };
}
