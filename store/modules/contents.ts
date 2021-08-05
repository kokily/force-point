import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ContentType = {
  evidenceId: string;
  channel: string;
  evidenceStartTime: Date;
  agentTime: Date;
  userDim: {
    label: string;
    targetUser: {
      samAccountName: string;
    };
  };
  eventType: {
    evidenceType: string;
    label: string;
  };
  agentDim: {
    label: string;
  };
  policy: string;
  applicationName: string;
  category: string;
  matchText: string;
  matchTextHan: string;
  resources: string;
  group: string;
};

export type ContentState = {
  data: ContentType[];
  loading: boolean;
  error: any;
};

export type ContentsPayload = {
  data: ContentType[];
};

const initialState: ContentState = {
  data: [],
  loading: false,
  error: null,
};

const contentsSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    dataRequest(state: ContentState, _action) {
      state.loading = true;
      state.error = null;
    },
    dataSuccess(state: ContentState, action: PayloadAction<ContentsPayload>) {
      state.loading = false;
      state.data = action.payload.data;
    },
    dataFailure(state: ContentState, action: PayloadAction<{ error: any }>) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

const { reducer, actions } = contentsSlice;

export const { dataRequest, dataSuccess, dataFailure } = actions;

export default reducer;
