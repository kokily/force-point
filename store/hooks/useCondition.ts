import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useCondition() {
  const condition = useSelector((state: RootState) => state.condition);

  const onClear = () => {
    if (typeof window !== 'undefined') {
      window.location.replace('/');
    }
  };

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
    onClear,
  };
}
