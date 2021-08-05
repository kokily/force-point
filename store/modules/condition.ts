import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ConditionType = {
  visible: boolean;
  value: string;
  sort: 'none' | 'asc' | 'desc';
};

export type ConditionState = {
  startTime: Date;
  endTime: Date;
  startAgentTime: Date;
  endAgentTime: Date;
  time: ConditionType;
  agentTime: ConditionType;
  user: ConditionType;
  agent: ConditionType;
  person: ConditionType;
  policy: ConditionType;
  application: ConditionType;
  category: ConditionType;
  matches: ConditionType;
  resource: ConditionType;
  group: ConditionType;
};

export type TimePayload = {
  date: Date;
};

export type ConditionPayload = {
  condition: ConditionType;
};

const initialState: ConditionState = {
  startTime: new Date(),
  endTime: new Date(),
  startAgentTime: new Date(),
  endAgentTime: new Date(),
  time: {
    visible: false,
    value: '',
    sort: 'none',
  },
  agentTime: {
    visible: false,
    value: '',
    sort: 'none',
  },
  user: {
    visible: false,
    value: '',
    sort: 'none',
  },
  agent: {
    visible: false,
    value: '',
    sort: 'none',
  },
  person: {
    visible: false,
    value: '',
    sort: 'none',
  },
  policy: {
    visible: false,
    value: '',
    sort: 'none',
  },
  application: {
    visible: false,
    value: '',
    sort: 'none',
  },
  category: {
    visible: false,
    value: '',
    sort: 'none',
  },
  matches: {
    visible: false,
    value: '',
    sort: 'none',
  },
  resource: {
    visible: false,
    value: '',
    sort: 'none',
  },
  group: {
    visible: false,
    value: '',
    sort: 'none',
  },
};

const conditionSlice = createSlice({
  name: 'condition',
  initialState,
  reducers: {
    setStartTime(state: ConditionState, action: PayloadAction<TimePayload>) {
      state.startTime = action.payload.date;
    },
    setEndTime(state: ConditionState, action: PayloadAction<TimePayload>) {
      state.endTime = action.payload.date;
    },
    setStartAgentTime(
      state: ConditionState,
      action: PayloadAction<TimePayload>
    ) {
      state.startAgentTime = action.payload.date;
    },
    setEndAgentTime(state: ConditionState, action: PayloadAction<TimePayload>) {
      state.endAgentTime = action.payload.date;
    },
    setTime(state: ConditionState, action: PayloadAction<ConditionPayload>) {
      state.time = action.payload.condition;
    },
    setAgentTime(
      state: ConditionState,
      action: PayloadAction<ConditionPayload>
    ) {
      state.agentTime = action.payload.condition;
    },
    setUser(state: ConditionState, action: PayloadAction<ConditionPayload>) {
      state.user = action.payload.condition;
    },
    setAgent(state: ConditionState, action: PayloadAction<ConditionPayload>) {
      state.agent = action.payload.condition;
    },
    setPerson(state: ConditionState, action: PayloadAction<ConditionPayload>) {
      state.person = action.payload.condition;
    },
    setPolicy(state: ConditionState, action: PayloadAction<ConditionPayload>) {
      state.policy = action.payload.condition;
    },
    setApplication(
      state: ConditionState,
      action: PayloadAction<ConditionPayload>
    ) {
      state.application = action.payload.condition;
    },
    setCategory(
      state: ConditionState,
      action: PayloadAction<ConditionPayload>
    ) {
      state.category = action.payload.condition;
    },
    setMatches(state: ConditionState, action: PayloadAction<ConditionPayload>) {
      state.matches = action.payload.condition;
    },
    setResource(
      state: ConditionState,
      action: PayloadAction<ConditionPayload>
    ) {
      state.resource = action.payload.condition;
    },
    setGroup(state: ConditionState, action: PayloadAction<ConditionPayload>) {
      state.group = action.payload.condition;
    },
  },
});

const { reducer, actions } = conditionSlice;

export const {
  setStartTime,
  setEndTime,
  setStartAgentTime,
  setEndAgentTime,
  setTime,
  setAgentTime,
  setUser,
  setAgent,
  setPerson,
  setPolicy,
  setApplication,
  setCategory,
  setMatches,
  setResource,
  setGroup,
} = actions;

export default reducer;
