import React from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

import deezNuts from '../assets/audio/deezNuts.wav';
import cathMeOutside from '../assets/audio/howBoutDat.wav';
import bridgeMeme from '../assets/audio/jumpOffBridgeMeme.wav';
import sadViolin from '../assets/audio/sadViolin.wav';
import damnDaniel from '../assets/audio/damnDaniel.wav';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

class MemeList extends React.Component {
  state = {
    status: Sound.status.STOPPED,
    url: '',
  }

  playDeezNuts = () => {
    this.setState({ url: deezNuts });
    this.setState({ status: Sound.status.PLAYING });
  }

  playCatchMeOutside = () => {
    this.setState({ url: cathMeOutside });
    this.setState({ status: Sound.status.PLAYING });
  }

  playBridgeMeme = () => {
    this.setState({ url: bridgeMeme });
    this.setState({ status: Sound.status.PLAYING });
  }

  playSadViolin = () => {
    this.setState({ url: sadViolin });
    this.setState({ status: Sound.status.PLAYING });
  }

  playDamnDaniel = () => {
    this.setState({ url: damnDaniel });
    this.setState({ status: Sound.status.PLAYING });
  }

  stopAudio = () => {
    this.setState({ status: Sound.status.STOPPED });
    this.setState({ url: '' });
  }

  render() {
    return (
      <div>
        <Sound
          url={this.state.url}
          playStatus={this.state.status}
          volume={80}
          onFinishedPlaying={this.stopAudio}
        />
        <button onClick={this.playDeezNuts} > Deez Nuts </button>
        <button onClick={this.playCatchMeOutside} > Catch Me Outside </button>
        <button onClick={this.playBridgeMeme} > Man Jumps Off Bridge </button>
        <button onClick={this.playSadViolin} > Sad Violin </button>
        <button onClick={this.playDamnDaniel} > Damn Daniel </button>
        <h1>{`${this.state.status}`}</h1>
      </div>
    );
  }
}

MemeList.propTypes = propTypes;

export default MemeList;
