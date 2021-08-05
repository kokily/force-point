import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type MenuState = {
  menu: string[];
};

export type MenuPayload = {
  menu: string[];
};

const initialState: MenuState = {
  menu: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu(state: MenuState, action: PayloadAction<MenuPayload>) {
      state.menu = action.payload.menu;
    },
  },
});

const { reducer, actions } = menuSlice;

export const { setMenu } = actions;

export default reducer;
