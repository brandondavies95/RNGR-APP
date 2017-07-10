import * as actions from '../actions';

export default function logins() {
  switch (actions) {
    case actions.GOOGLE_LOGIN_REQ:
      return [];
    default:
      return '';
  }
}
