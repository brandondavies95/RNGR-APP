import React from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import rngrLogo from '../assets/images/logo1.png';
import play from '../assets/images/play1.png';
import pause from '../assets/images/pause1.png';

class HomeView extends React.Component {
  state = {
    url: '',
    status: Sound.status.STOPPED,
    icon: play,
    playing: false,
  }

  stopAudio = () => {
    this.setState({
      url: '',
      stauts: Sound.status.STOPPED,
      icon: play,
      playing: false,
    });
  }

  playButton = () => {
    if (this.state.playing === false) {
      const meme = require('../assets/audio/' + this.props.memes[3].url);
      this.setState({
        url: meme,
        status: Sound.status.PLAYING,
        icon: pause,
        playing: true,
      });
    } else {
      this.stopAudio();
    }
  }

  render() {
    return (
      <div className="rngr-wrapper start-page">
        <div className="phone">
          <div className="screen">
            <button className="rngr-button" />
            <button onTouchTap={this.playButton} className="rngr-button main"><img src={this.state.icon} alt="" /></button>
            <button className="rngr-button" />
            <button className="rngr-button" />
            <button className="rngr-button" />
          </div>
        </div>
        <div className="intro">
          <img src={rngrLogo} className="rngr"/>
          <p className="intro">Play Audio Memes on Demand</p>
          <a href="http://localhost:3001/login" className="rngr">Get Started</a>
        </div>
        <Sound
          url={this.state.url}
          playStatus={this.state.status}
          volume={60}
          onFinishedPlaying={this.stopAudio}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    memes: state.memes,
    user: state.userMemes,
  };
}

export default connect (mapStateToProps)(HomeView);
