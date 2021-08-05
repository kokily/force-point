import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  userId: string;
  loading: boolean;
  error: any;
};

export type UserPayload = {
  userId: string;
  error: any;
};

const initialState: UserState = {
  userId: '',
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn(state: UserState, action: PayloadAction<UserPayload>) {
      state.userId = action.payload.userId;
    },
    logoutRequest(state: UserState, _action) {
      state.loading = true;
      state.error = null;
    },
    logoutSuccess(state: UserState, _action) {
      state.loading = false;
      state.userId = '';
    },
    logoutFailure(state: UserState, action: PayloadAction<UserPayload>) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

const { reducer, actions } = userSlice;

export const { loggedIn, logoutRequest, logoutSuccess, logoutFailure } =
  actions;

export default reducer;
