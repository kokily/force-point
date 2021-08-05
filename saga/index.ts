import { all, fork } from 'redux-saga/effects';
import { watchGetMoviesList } from './movieSaga';
import { watchContents } from './contentsSaga';
import { watchLogout } from './userSaga';

export default function* rootSaga() {
  yield all([fork(watchGetMoviesList), fork(watchContents), fork(watchLogout)]);
}
