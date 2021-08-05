import React from 'react';
import styled from 'styled-components';
import useCondition from '../../store/hooks/useCondition';
import Select from './Select';
import Input from './Input';
import Button from '../common/Button';
import useSelect from './hooks/useSelect';
import useUser from './hooks/useUser';
import useAgent from './hooks/useAgent';
import usePerson from './hooks/usePerson';
import usePolicy from './hooks/usePolicy';
import useApplication from './hooks/useApplication';
import useCategory from './hooks/useCategory';
import useMatches from './hooks/useMatches';
import useGroup from './hooks/useGroup';

// Styles
const Container = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
`;

interface Props {}

const Condition: React.FC<Props> = () => {
  const { onClear } = useCondition();
  const { menu } = useSelect();
  const { user, onChangeUser } = useUser();
  const { agent, onChangeAgent } = useAgent();
  const { person, onChangePerson } = usePerson();
  const { policy, onChangePolicy } = usePolicy();
  const { application, onChangeApplication } = useApplication();
  const { category, onChangeCategory } = useCategory();
  const { matches, onChangeMatches } = useMatches();
  const { group, onChangeGroup } = useGroup();

  return (
    <Container>
      <Select />
      {user.visible && (
        <Input name="user" value={user.value} onChange={onChangeUser} />
      )}
      {agent.visible && (
        <Input name="agent" value={agent.value} onChange={onChangeAgent} />
      )}
      {person.visible && (
        <Input name="person" value={person.value} onChange={onChangePerson} />
      )}
      {policy.visible && (
        <Input name="policy" value={policy.value} onChange={onChangePolicy} />
      )}
      {application.visible && (
        <Input
          name="application"
          value={application.value}
          onChange={onChangeApplication}
        />
      )}
      {category.visible && (
        <Input
          name="category"
          value={category.value}
          onChange={onChangeCategory}
        />
      )}
      {matches.visible && (
        <Input
          name="matches"
          value={matches.value}
          onChange={onChangeMatches}
        />
      )}
      {group.visible && (
        <Input name="group" value={group.value} onChange={onChangeGroup} />
      )}

      <Button cyan>조 회</Button>

      {menu.menu.length > 0 && (
        <>
          <Button onClick={onClear}>초기화</Button>
        </>
      )}
    </Container>
  );
};

export default Condition;
