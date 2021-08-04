import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type MovieType = {
  score: number;
  show: {
    name: string;
    url: string;
    type: string;
    language: string;
  };
};

export type MovieState = {
  data: MovieType[];
  loading: boolean;
  error: string;
};

export type MoviePayload = {
  data: MovieType[];
};

const initialState: MovieState = {
  data: [],
  loading: true,
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    moviesRequest(state: MovieState, _action) {
      state.loading = true;
      state.error = null;
    },
    moviesSuccess(state: MovieState, action: PayloadAction<MoviePayload>) {
      state.loading = false;
      state.data = action.payload.data;
    },
    moviesFailure(state: MovieState, action: PayloadAction<{ error: any }>) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

const { reducer, actions } = movieSlice;

export const { moviesRequest, moviesSuccess, moviesFailure } = actions;

export default reducer;
