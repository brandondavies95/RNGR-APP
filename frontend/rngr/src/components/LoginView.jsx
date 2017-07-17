import React, { Component } from 'react';
import GoogleLogin from './GoogleLogin';
import FacebookLogin from './FacebookLogin';
import LoginForm from './Login-Form';

import { USER_CREATE_REQ } from '../actions';

class LoginView extends Component {
  state = {}

  inputChange = (e) => {
    const currentItem = e.target.value;
    this.setState({ currentItem });
  }

  submit = () => {
    this.dispatch(USER_CREATE_REQ);
  }

  render() {
    return (
      <div>
        <h1>RNGR</h1>
        <div className="rngr-form">
          <div className="">
            <LoginForm onChange={this.inputChange} onClick={this.submit} />
            <div className="google"><GoogleLogin /></div>
            <div className="facebook"><FacebookLogin /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
