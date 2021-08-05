import axios from 'axios';
import moment from 'moment';
import useUser from '../hooks/useUser';
import useCondition from '../hooks/useCondition';
import useChastity from '../hooks/useChastity';

export default function getContents() {
  const { userId } = useUser();
  const { currentPage, counter, evidenceType } = useChastity();
  const {
    startTime,
    endTime,
    startAgentTime,
    endAgentTime,
    time,
    agentTime,
    user,
    agent,
    person,
    policy,
    application,
    category,
    matches,
    resource,
    group,
  } = useCondition();

  const sortArray = [
    { name: 'EVIDENCESTARTTIME', sort: time.sort },
    { name: 'agentTime', sort: agentTime.sort },
    { name: 'userDim.label', sort: user.sort },
    { name: 'agentDim.label', sort: agent.sort },
    { name: 'userDim.targetUser.label', sort: person.sort },
    { name: 'policy', sort: policy.sort },
    { name: 'applicationName', sort: application.sort },
    { name: 'category', sort: category.sort },
    { name: 'matchtext', sort: matches.sort },
    { name: 'resources', sort: resource.sort },
    { name: 'group', sort: group.sort },
  ];

  const sortData = sortArray.filter((data) => {
    return data.sort !== 'none';
  });

  return axios.get('http://3.34.5.214:8080/evidences/9/list', {
    params: {
      page: currentPage,
      size: counter,
      evidenceType,
      user,
      agent,
      person,
      policy,
      application,
      category,
      matches,
      resource,
      group,
      sort: `${sortData[0].name},${sortData[0].sort}`,
      startTime: `${moment(startTime).format('YYYY-MM-DD')}`,
      endTime: `${moment(endTime).format('YYYY-MM-DD')}`,
      startAgentTime: `${moment(startAgentTime).format('YYYY-MM-DD')}`,
      endAgentTime: `${moment(endAgentTime).format('YYYY-MM-DD')}`,
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      JSESSIONID: userId,
    },
  });
}
