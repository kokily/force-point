import { call, put, takeLatest } from 'redux-saga/effects';
import logoutUser from '../store/api/user';
import {
  logoutFailure,
  logoutRequest,
  logoutSuccess,
} from '../store/modules/user';

function* logoutUserSaga() {
  try {
    const result = yield call(logoutUser);

    yield put(logoutSuccess(result));
  } catch (err) {
    yield put(logoutFailure(err));
  }
}

export function* watchLogout() {
  yield takeLatest(logoutRequest.type, logoutUserSaga);
}
