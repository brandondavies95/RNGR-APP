import React from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

import deezNuts from '../assets/audio/deezNuts.wav';
import cathMeOutside from '../assets/audio/howBoutDat.wav';
import bridgeMeme from '../assets/audio/jumpOffBridgeMeme.wav';
import sadViolin from '../assets/audio/sadViolin.wav';
import damnDaniel from '../assets/audio/damnDaniel.wav';

import play from '../assets/images/play-button.svg';
import pause from '../assets/images/pause.svg';
// import MemeStore from './MemeStore';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

class MemeList extends React.Component {
  state = {
    status: Sound.status.STOPPED,
    url: '',
    icon1: play,
    icon2: play,
    icon3: play,
    icon4: play,
    icon5: play,
    sound: 'sound0',
  }

  stopAudio = () => {
    this.setState({
      status: Sound.status.STOPPED,
      sound: 'sound0',
      icon1: play,
      icon2: play,
      icon3: play,
      icon4: play,
      icon5: play,
    });
  }

  playButton1 = () => {
    if (this.state.sound !== 'sound1') {
      this.setState({
        url: deezNuts,
        status: Sound.status.PLAYING,
        sound: 'sound1',
        icon1: pause,
        icon2: play,
        icon3: play,
        icon4: play,
        icon5: play,
      });
    } else {
      this.setState({
        url: '',
        status: Sound.status.STOPPED,
        sound: 'sound0',
        icon1: play,
        icon2: play,
        icon3: play,
        icon4: play,
        icon5: play,
      });
    }
  }

  playButton2 = () => {
    if (this.state.sound !== 'sound2') {
      this.setState({
        url: cathMeOutside,
        status: Sound.status.PLAYING,
        sound: 'sound2',
        icon1: play,
        icon2: pause,
        icon3: play,
        icon4: play,
        icon5: play,
      });
    } else {
      this.setState({
        url: '',
        status: Sound.status.STOPPED,
        sound: 'sound0',
        icon1: play,
        icon2: play,
        icon3: play,
        icon4: play,
        icon5: play,
      });
    }
  }

  playButton3 = () => {
    if (this.state.sound !== 'sound3') {
      this.setState({
        url: bridgeMeme,
        status: Sound.status.PLAYING,
        sound: 'sound3',
        icon1: play,
        icon2: play,
        icon3: pause,
        icon4: play,
        icon5: play,
      });
    } else {
      this.setState({
        url: '',
        status: Sound.status.STOPPED,
        sound: 'sound0',
        icon1: play,
        icon2: play,
        icon3: play,
        icon4: play,
        icon5: play,
      });
    }
  }

  playButton4 = () => {
    if (this.state.sound !== 'sound4') {
      this.setState({
        url: sadViolin,
        status: Sound.status.PLAYING,
        sound: 'sound4',
        icon1: play,
        icon2: play,
        icon3: play,
        icon4: pause,
        icon5: play,
      });
    } else {
      this.setState({
        url: '',
        status: Sound.status.STOPPED,
        sound: 'sound0',
        icon1: play,
        icon2: play,
        icon3: play,
        icon4: play,
        icon5: play,
      });
    }
  }

  playButton5 = () => {
    if (this.state.sound !== 'sound5') {
      this.setState({
        url: damnDaniel,
        status: Sound.status.PLAYING,
        sound: 'sound5',
        icon1: play,
        icon2: play,
        icon3: play,
        icon4: play,
        icon5: pause,
      });
    } else {
      this.setState({
        url: '',
        status: Sound.status.STOPPED,
        sound: 'sound0',
        icon1: play,
        icon2: play,
        icon3: play,
        icon4: play,
        icon5: play,
      });
    }
  }

  render() {
    return (
      <div className="dashBoard">
        <Sound
          url={this.state.url}
          playStatus={this.state.status}
          volume={80}
          onPlaying={this.playAudio}
          onFinishedPlaying={this.stopAudio}
        />
        <button onTouchTap={this.playButton1} className="rngr-button">deezNuts<img src={this.state.icon1} alt="" /></button>
        <button onTouchTap={this.playButton2} className="rngr-button">Catch Me Outside<img src={this.state.icon2} alt="" /></button>
        <button onTouchTap={this.playButton3} className="rngr-button">Man Jumps Off Bridge<img src={this.state.icon3} alt="" /></button>
        <button onTouchTap={this.playButton4} className="rngr-button">Sad Violin<img src={this.state.icon4} alt="" /></button>
        <button onTouchTap={this.playButton5} className="rngr-button">Damn Daniel<img src={this.state.icon5} alt="" /></button>
      </div>
    );
  }
}

MemeList.propTypes = propTypes;

export default MemeList;
