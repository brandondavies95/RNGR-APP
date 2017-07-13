import React, { Component } from 'react';
import GoogleLogin from './GoogleLogin';
import Facebook from './FacebookLogin';
import LoginForm from './Login-Form';

class LoginView extends Component {
  state = {}
  submit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1>RNGR</h1>
          <LoginForm onSubmit={this.submit} />
          <GoogleLogin />
          <Facebook />
        </div>
      </div>
    );
  }
}

export default LoginView;
