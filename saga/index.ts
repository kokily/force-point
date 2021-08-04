import { all, fork } from 'redux-saga/effects';
import { watchGetMoviesList } from './movieSaga';

export default function* rootSaga() {
  yield all([fork(watchGetMoviesList)]);
}
