import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  moviesRequest,
  moviesSuccess,
  moviesFailure,
} from '../store/modules/movie';

function getMoviesListAPI() {
  return axios.get('https://api.tvmaze.com/search/shows?q=superman');
}

function* fetchGetMoviesListSaga() {
  try {
    const result = yield call(getMoviesListAPI);

    yield put(moviesSuccess(result));
  } catch (err) {
    yield put(moviesFailure(err));
  }
}

export function* watchGetMoviesList() {
  yield takeLatest(moviesRequest.type, fetchGetMoviesListSaga);
}
