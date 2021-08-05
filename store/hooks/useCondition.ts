import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  ConditionPayload,
  setAgent,
  setAgentTime,
  setApplication,
  setCategory,
  setGroup,
  setMatches,
  setPerson,
  setPolicy,
  setResource,
  setTime,
  setUser,
} from '../modules/condition';

export default function useCondition() {
  const dispatch = useDispatch();
  const condition = useSelector((state: RootState) => state.condition);

  // group
  const onChangeTime = useCallback((data: ConditionPayload) => {
    dispatch(setTime(data));
  }, []);

  const onChangeAgentTime = useCallback((data: ConditionPayload) => {
    dispatch(setAgentTime(data));
  }, []);

  const onChangeUser = useCallback((data: ConditionPayload) => {
    dispatch(setUser(data));
  }, []);

  const onChangeAgent = useCallback((data: ConditionPayload) => {
    dispatch(setAgent(data));
  }, []);

  const onChangePerson = useCallback((data: ConditionPayload) => {
    dispatch(setPerson(data));
  }, []);

  const onChangePolicy = useCallback((data: ConditionPayload) => {
    dispatch(setPolicy(data));
  }, []);

  const onChangeApplication = useCallback((data: ConditionPayload) => {
    dispatch(setApplication(data));
  }, []);

  const onChangeCategory = useCallback((data: ConditionPayload) => {
    dispatch(setCategory(data));
  }, []);

  const onChangeMatches = useCallback((data: ConditionPayload) => {
    dispatch(setMatches(data));
  }, []);

  const onChangeResource = useCallback((data: ConditionPayload) => {
    dispatch(setResource(data));
  }, []);

  const onChangeGroup = useCallback((data: ConditionPayload) => {
    dispatch(setGroup(data));
  }, []);

  return {
    startTime: condition.startTime,
    endTime: condition.endTime,
    startAgentTime: condition.startAgentTime,
    endAgentTime: condition.endAgentTime,
    time: condition.time,
    agentTime: condition.agentTime,
    user: condition.user,
    agent: condition.agent,
    person: condition.person,
    policy: condition.policy,
    application: condition.application,
    category: condition.category,
    matches: condition.matches,
    resource: condition.resource,
    group: condition.group,
    onChangeTime,
    onChangeAgentTime,
    onChangeUser,
    onChangeAgent,
    onChangePerson,
    onChangePolicy,
    onChangeApplication,
    onChangeCategory,
    onChangeMatches,
    onChangeResource,
    onChangeGroup,
  };
}
