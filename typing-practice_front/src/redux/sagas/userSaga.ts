import { all, fork, put, call } from 'redux-saga/effects';

export default function* userSaga() {
  yield all([fork]);
}
