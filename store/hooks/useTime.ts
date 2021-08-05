import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  setEndAgentTime,
  setEndTime,
  setStartAgentTime,
  setStartTime,
  TimePayload,
} from '../modules/condition';

export default function useTime() {
  const dispatch = useDispatch();
  const condition = useSelector((state: RootState) => state.condition);

  const onChangeStartTime = useCallback((data: TimePayload) => {
    dispatch(setStartTime(data));
  }, []);

  const onChangeEndTime = useCallback((data: TimePayload) => {
    dispatch(setEndTime(data));
  }, []);

  const onChangeStartAgentTime = useCallback((data: TimePayload) => {
    dispatch(setStartAgentTime(data));
  }, []);

  const onChangeEndAgentTime = useCallback((data: TimePayload) => {
    dispatch(setEndAgentTime(data));
  }, []);

  return {
    startTime: condition.startTime,
    endTime: condition.endTime,
    startAgentTime: condition.startAgentTime,
    endAgentTime: condition.endAgentTime,
    onChangeStartTime,
    onChangeEndTime,
    onChangeStartAgentTime,
    onChangeEndAgentTime,
  };
}
