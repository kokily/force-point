import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  userId: string;
};

export type UserPayload = {
  userId: string;
};

const initialState: UserState = {
  userId: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn(state: UserState, action: PayloadAction<UserPayload>) {
      state.userId = action.payload.userId;
    },
  },
});

const { reducer, actions } = userSlice;

export const { loggedIn } = actions;

export default reducer;
