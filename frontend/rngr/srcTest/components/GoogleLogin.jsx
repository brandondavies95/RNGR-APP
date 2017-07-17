import GoogleButton from 'react-google-button';
import React from 'react';

const GoogleLogin = () => (
  <div>
    <a href="http://localhost:3001/auth/google">
      <GoogleButton />
    </a>
  </div>
);

export default GoogleLogin;
