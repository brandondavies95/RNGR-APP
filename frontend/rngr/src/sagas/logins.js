import { call, put } from 'reacux-saga/effects';
import loginApi from '../api/logins';
import * as actions from '../actions';

export function* createItem(action) {
  try{
    const item = yield call(loginApi.createItemPromise, action.login);
    yield put({
      type: actions.GOOGLE_LOGIN_REQ,
      item,
    });
  } catch (err) {
    console.log(err);
  }
}
