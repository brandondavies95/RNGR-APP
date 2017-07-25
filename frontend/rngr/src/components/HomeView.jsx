import React from 'react';

import rngrLogo from '../assets/images/fake-rngrLogo.png';

class HomeView extends React.Component {
  render() {
    return (
      <div className="rngr-wrapper start-page">
        <img src={rngrLogo} className="rngr"/>
        <a href="http://localhost:3001/login" className="rngr">Login</a>
      </div>
    );
  }
}

export default HomeView;
