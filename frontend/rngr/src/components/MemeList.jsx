import React from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

import deezNuts from '../assets/audio/deezNuts.wav';
import cathMeOutside from '../assets/audio/howBoutDat.wav';
import bridgeMeme from '../assets/audio/jumpOffBridgeMeme.wav';
import sadViolin from '../assets/audio/sadViolin.wav';
import damnDaniel from '../assets/audio/damnDaniel.wav';

import play from '../assets/images/play-button.png';
import pause from '../assets/images/pause.png';
// import MemeStore from './MemeStore';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

class MemeList extends React.Component {
  state = {
    status: Sound.status.STOPPED,
    url: '',
    icon: play,
  }

  stopAudio = () => {
    this.setState({ status: Sound.status.STOPPED, url: '', isPlaying: true, icon: play });
  };

  pauseAudio = () => {
    this.setState({ status: Sound.status.STOPPED, icon: play });
  }

  playAudio = () => {
    this.setState({ isPlaying: true, icon: pause });
  }

  playSound = () => {
    if (this.state.isPlaying === true) {
      this.setState({ status: Sound.status.STOPPED, icon: play, isPlaying: false });
    } else {
      this.setState({ status: Sound.status.PLAYING });
    }
  }

  playDeezNuts = () => {
    this.setState({ url: deezNuts });
    if (this.state.isPlaying === true) {
      this.setState({ status: Sound.status.STOPPED, icon: play, isPlaying: false });
    } else {
      this.setState({ status: Sound.status.PLAYING });
    }
  };

  playCatchMeOutside = () => {
    this.setState({ url: cathMeOutside });
    if (this.state.isPlaying === true) {
      this.setState({ status: Sound.status.STOPPED, icon: play, isPlaying: false });
    } else {
      this.setState({ status: Sound.status.PLAYING });
    }
  };

  playBridgeMeme = () => {
    this.setState({ url: bridgeMeme });
    if (this.state.isPlaying === true) {
      this.setState({ status: Sound.status.STOPPED, icon: play, isPlaying: false });
    } else {
      this.setState({ status: Sound.status.PLAYING });
    }
  };

  playSadViolin = () => {
    this.setState({ url: sadViolin });
    if (this.state.isPlaying === true) {
      this.setState({ status: Sound.status.STOPPED, icon: play, isPlaying: false });
    } else {
      this.setState({ status: Sound.status.PLAYING });
    }
  };

  playDamnDaniel = () => {
    this.setState({ url: damnDaniel });
    if (this.state.isPlaying === true) {
      this.setState({ status: Sound.status.STOPPED, icon: play, isPlaying: false });
    } else {
      this.setState({ status: Sound.status.PLAYING });
    }
  };

  render() {
    return (
      <div>
        <Sound
          url={this.state.url}
          playStatus={this.state.status}
          volume={80}
          onPlaying={this.playAudio}
          onFinishedPlaying={this.stopAudio}
        />
        <button onTouchTap={this.playDeezNuts}>deezNuts<img src={this.state.icon} alt="" /></button>
        <button onTouchTap={this.playCatchMeOutside}>Catch Me Outside<img src={this.state.icon} alt="" /></button>
        <button onTouchTap={this.playBridgeMeme}>Man Jumps Off Bridge<img src={this.state.icon} alt="" /></button>
        <button onTouchTap={this.playSadViolin}>Sad Violin<img src={this.state.icon} alt="" /></button>
        <button onTouchTap={this.playDamnDaniel}>Damn Daniel<img src={this.state.icon} alt="" /></button>
      </div>
    );
  }
}

MemeList.propTypes = propTypes;

export default MemeList;
