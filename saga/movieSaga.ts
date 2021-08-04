import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  MoviePayload,
  moviesRequest,
  moviesSuccess,
  moviesFailure,
} from '../store/modules/movie';

function getMoviesListAPI(data: MoviePayload) {
  return axios.get('https://api.tvmaze.com/search/shows?q=superman');
}

function* fetchGetMoviesListSaga(action: PayloadAction<MoviePayload>) {
  try {
    const result = yield call(getMoviesListAPI, action.payload);

    yield put(moviesSuccess(result));
  } catch (err) {
    yield put(moviesFailure(err));
  }
}

export function* watchGetMoviesList() {
  yield takeLatest(moviesRequest.type, fetchGetMoviesListSaga);
}
