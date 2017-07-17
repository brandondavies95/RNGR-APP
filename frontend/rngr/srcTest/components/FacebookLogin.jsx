import FacebookLogin from 'react-facebook-login';
import React from 'react';

const Facebook = () => (
  <div>
    <a href="http://localhost:3001/auth/facebook">
      <FacebookLogin />
    </a>
  </div>
);

export default Facebook;
