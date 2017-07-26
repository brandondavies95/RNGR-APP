import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { createItem } from './items';
import { googleLogin } from './logins';
import * as actions from '../actions';

export default function* sagas() {
  yield [
    fork(takeLatest, actions.ITEM_CREATE_REQ, createItem),
    fork(takeLatest, actions.GOOGLE_LOGIN_REQ, googleLogin),
  ];
}
