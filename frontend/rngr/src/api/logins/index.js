import 'whatwg-fetch';
import receiveStatus from '../receiveStatus';

export default class loginApi {
  static createItemPromise(login) {
    return fetch:('/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login),
    })
      .then(res => recieveStatus(res))
      .then(res => res.json())
      .catch(err => recieveStatus(err));
  }
}
