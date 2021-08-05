import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setMenu } from '../../../store/modules/menu';
import useTime from './useTime';
import useUser from './useUser';
import useAgentTime from './useAgentTime';
import useAgent from './useAgent';
import usePerson from './usePerson';
import usePolicy from './usePolicy';
import useApplication from './useApplication';
import useCategory from './useCategory';
import useMatches from './useMatches';
import useGroup from './useGroup';

export default function useSelect() {
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.menu);
  const { onToggleTime } = useTime();
  const { onToggleUser } = useUser();
  const { onToggleAgentTime } = useAgentTime();
  const { onToggleAgent } = useAgent();
  const { onTogglePerson } = usePerson();
  const { onTogglePolicy } = usePolicy();
  const { onToggleApplication } = useApplication();
  const { onToggleCategory } = useCategory();
  const { onToggleMatches } = useMatches();
  const { onToggleGroup } = useGroup();

  const options = [
    { value: 'user', label: 'User' },
    { value: 'time', label: 'Time' },
    { value: 'agentTime', label: 'Agent Time' },
    { value: 'agent', label: 'Agent' },
    { value: 'person', label: 'Person' },
    { value: 'policy', label: 'Policy' },
    { value: 'application', label: 'Application' },
    { value: 'category', label: 'Category' },
    { value: 'matches', label: 'Matches' },
    { value: 'group', label: 'Group' },
  ];

  const onChange = (e: any, { action }: { action: string }) => {
    let name = '';

    dispatch(
      setMenu({
        menu: Array.isArray(e)
          ? e.map((x) => {
              name = x.value;
              return x.value;
            })
          : [],
      })
    );

    switch (action) {
      case 'clear':
        return onAllClose();
      case 'select-option':
        return onInputChange(name);
      case 'remove-value':
        return onRemoveValue(name);
      default:
        return;
    }
  };

  const onInputChange = (name: string) => {
    switch (name) {
      case 'time':
        return onToggleTime();
      case 'user':
        return onToggleUser();
      case 'agentTime':
        return onToggleAgentTime();
      case 'agent':
        return onToggleAgent();
      case 'person':
        return onTogglePerson();
      case 'policy':
        return onTogglePolicy();
      case 'application':
        return onToggleApplication();
      case 'category':
        return onToggleCategory();
      case 'matches':
        return onToggleMatches();
      case 'group':
        return onToggleGroup();
      default:
        return;
    }
  };

  const onRemoveValue = (name: string) => {
    switch (name) {
      case 'time':
        return onToggleTime(true);
      case 'user':
        return onToggleUser(true);
      case 'agentTime':
        return onToggleAgentTime(true);
      case 'agent':
        return onToggleAgent(true);
      case 'person':
        return onTogglePerson(true);
      case 'policy':
        return onTogglePolicy(true);
      case 'application':
        return onToggleApplication(true);
      case 'category':
        return onToggleCategory(true);
      case 'matches':
        return onToggleMatches(true);
      case 'group':
        return onToggleGroup(true);
      default:
        return;
    }
  };

  const onAllClose = () => {
    onToggleTime(true);
    onToggleUser(true);
    onToggleAgentTime(true);
    onToggleAgent(true);
    onTogglePerson(true);
    onTogglePolicy(true);
    onToggleApplication(true);
    onToggleCategory(true);
    onToggleMatches(true);
    onToggleGroup(true);
  };

  return {
    options,
    onChange,
    menu,
  };
}
