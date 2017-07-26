import { call, put } from 'redux-saga/effects';
import loginApi from '../api/logins';
import * as actions from '../actions';

export function* googleLogin(action) { // eslint-disable-line import/prefer-default-export
  try {
    const item = yield call(loginApi.createItemPromise, action.login);
    yield put({
      type: actions.GOOGLE_LOGIN_REQ,
      item,
    });
  } catch (err) {
    console.log(err);
  }
}
