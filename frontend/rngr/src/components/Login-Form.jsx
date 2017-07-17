import React from 'react';

const LoginForm = () => (
  <div className="inputs">
    <input onChange={this.onChange} placeholder="name" />
    <input onChange={this.onChange} placeholder="email" />
    <input onChange={this.onChange} placeholder="password" />
    <button type="submit" onClick={this.onClick} >Login</button>
  </div>
);

export default LoginForm;
