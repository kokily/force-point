import { call, put, takeLatest } from 'redux-saga/effects';
import getContents from '../store/api/contents';
import {
  dataFailure,
  dataRequest,
  dataSuccess,
} from '../store/modules/contents';

function* fetchContentsSaga() {
  try {
    const result = yield call(getContents);

    yield put(dataSuccess(result));
  } catch (err) {
    yield put(dataFailure(err));
  }
}

export function* watchContents() {
  yield takeLatest(dataRequest.type, fetchContentsSaga);
}
