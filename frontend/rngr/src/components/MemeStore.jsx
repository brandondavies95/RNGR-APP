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
    icon1: play,
    icon2: play,
    icon3: play,
    icon4: play,
    icon5: play,
    sound1: false,
    sound2: false,
    sound3: false,
    sound4: false,
    sound5: false,
  }

  playButton1 = () => {
    if (this.state.sound1 === false) {
      this.setState({
        url: deezNuts,
        status: Sound.status.PLAYING,
        sound1: true,
        sound2: false,
        sound3: false,
        sound4: false,
        sound5: false,
      });
    } else {
      this.setState({ url: '', status: Sound.status.STOPPED, sound1: false });
    }
  }

  playButton2 = () => {
    if (this.state.sound2 === false) {
      this.setState({
        url: cathMeOutside,
        status: Sound.status.PLAYING,
        sound1: false,
        sound2: true,
        sound3: false,
        sound4: false,
        sound5: false,
      });
    } else {
      this.setState({ url: '', status: Sound.status.STOPPED, sound2: false });
    }
  }

  playButton3 = () => {
    if (this.state.sound3 === false) {
      this.setState({
        url: bridgeMeme,
        status: Sound.status.PLAYING,
        sound1: false,
        sound2: false,
        sound3: true,
        sound4: false,
        sound5: false,
      });
    } else {
      this.setState({ url: '', status: Sound.status.STOPPED, sound3: false });
    }
  }

  playButton4 = () => {
    if (this.state.sound4 === false) {
      this.setState({
        url: sadViolin,
        status: Sound.status.PLAYING,
        sound1: false,
        sound2: false,
        sound3: false,
        sound4: true,
        sound5: false,
      });
    } else {
      this.setState({ url: '', status: Sound.status.STOPPED, sound4: false });
    }
  }

  playButton5 = () => {
    if (this.state.sound5 === false) {
      this.setState({
        url: damnDaniel,
        status: Sound.status.PLAYING,
        sound1: false,
        sound2: false,
        sound3: false,
        sound4: false,
        sound5: true,
      });
    } else {
      this.setState({ url: '', status: Sound.status.STOPPED, sound5: false });
    }
  }

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
        <button onTouchTap={this.playButton1}>deezNuts<img src={this.state.icon1} alt="" /></button>
        <button onTouchTap={this.playButton2}>Catch Me Outside<img src={this.state.icon2} alt="" /></button>
        <button onTouchTap={this.playButton3}>Man Jumps Off Bridge<img src={this.state.icon3} alt="" /></button>
        <button onTouchTap={this.playButton4}>Sad Violin<img src={this.state.icon4} alt="" /></button>
        <button onTouchTap={this.playButton5}>Damn Daniel<img src={this.state.icon5} alt="" /></button>
      </div>
    );
  }
}

MemeList.propTypes = propTypes;

export default MemeList;
