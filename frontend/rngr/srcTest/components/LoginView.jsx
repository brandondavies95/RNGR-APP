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
      <div className="row rngr-form">
        <div className="col-md-4 col-md-offset-4">
          <h1>RNGR</h1>
          <LoginForm onChange={this.inputChange} onClick={this.submit} />
          <GoogleLogin />
          <FacebookLogin />
        </div>
      </div>
    );
  }
}

export default LoginView;
