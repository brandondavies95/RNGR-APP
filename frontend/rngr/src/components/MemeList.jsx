import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sound from 'react-sound';

// const sound0 = require({ this.props.memes[0].url })
// import sound1 from {this.props.memes[1].url};
// import sound2 from {this.props.memes[2].url};
// import sound3 from {this.props.memes[3].url};
// import sound4 from {this.props.memes[4].url};

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

  sound0 = require('../assets/audio/' + this.props.memes[0].url);
  sound1 = require('../assets/audio/' + this.props.memes[1].url);
  sound2 = require('../assets/audio/' + this.props.memes[2].url);
  sound3 = require('../assets/audio/' + this.props.memes[3].url);
  sound4 = require('../assets/audio/' + this.props.memes[4].url);


  stopAudio = () => {
    this.setState({
      url: '',
      status: Sound.status.STOPPED,
      sound: 'sound',
      icon1: play,
      icon2: play,
      icon3: play,
      icon4: play,
      icon5: play,
    });
    const button1 = document.querySelector('#s0');
    const button2 = document.querySelector('#s1');
    const button3 = document.querySelector('#s2');
    const button4 = document.querySelector('#s3');
    const button5 = document.querySelector('#s4');
    button1.style.backgroundColor = '#ddd';
    button2.style.backgroundColor = '#ddd';
    button3.style.backgroundColor = '#ddd';
    button4.style.backgroundColor = '#ddd';
    button5.style.backgroundColor = '#ddd';
  }

  playButton0 = () => {
    this.stopAudio();
    const button = document.querySelector('#s0');
    if (this.state.sound !== 'sound0') {
      this.setState({
        url: this.sound0,
        status: Sound.status.PLAYING,
        sound: 'sound0',
        icon1: pause,
        icon2: play,
        icon3: play,
        icon4: play,
        icon5: play,
      });
      button.style.backgroundColor = '#86253C';
    }
  }

  playButton1 = () => {
    this.stopAudio();
    const button = document.querySelector('#s1');
    if (this.state.sound !== 'sound1') {
      this.setState({
        url: this.sound1,
        status: Sound.status.PLAYING,
        sound: 'sound1',
        icon1: play,
        icon2: pause,
        icon3: play,
        icon4: play,
        icon5: play,
      });
      button.style.backgroundColor = '#86253C';
    }
  }

  playButton2 = () => {
    this.stopAudio();
    const button = document.querySelector('#s2');
    if (this.state.sound !== 'sound2') {
      this.setState({
        url: this.sound2,
        status: Sound.status.PLAYING,
        sound: 'sound2',
        icon1: play,
        icon2: play,
        icon3: pause,
        icon4: play,
        icon5: play,
      });
      button.style.backgroundColor = '#86253C';
    }
  }

  playButton3 = () => {
    this.stopAudio();
    const button = document.querySelector('#s3');
    if (this.state.sound !== 'sound3') {
      this.setState({
        url: this.sound3,
        status: Sound.status.PLAYING,
        sound: 'sound3',
        icon1: play,
        icon2: play,
        icon3: play,
        icon4: pause,
        icon5: play,
      });
      button.style.backgroundColor = '#86253C';
    }
  }

  playButton4 = () => {
    this.stopAudio();
    const button = document.querySelector('#s4');
    if (this.state.sound !== 'sound4') {
      this.setState({
        url: this.sound4,
        status: Sound.status.PLAYING,
        sound: 'sound4',
        icon1: play,
        icon2: play,
        icon3: play,
        icon4: play,
        icon5: pause,
      });
      button.style.backgroundColor = '#86253C';
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
        <div className="rngr-box">
          <button onTouchTap={this.playButton0} className="rngr-button" id="s0">{this.props.memes[0].title}<img src={this.state.icon1} alt="" /></button>
          <button onTouchTap={this.playButton1} className="rngr-button" id="s1">{this.props.memes[1].title}<img src={this.state.icon2} alt="" /></button>
          <button onTouchTap={this.playButton2} className="rngr-button" id="s2">{this.props.memes[2].title}<img src={this.state.icon3} alt="" /></button>
          <button onTouchTap={this.playButton3} className="rngr-button" id="s3">{this.props.memes[3].title}<img src={this.state.icon4} alt="" /></button>
          <button onTouchTap={this.playButton4} className="rngr-button" id="s4">{this.props.memes[4].title}<img src={this.state.icon5} alt="" /></button>
        </div>
      </div>
    );
  }
}

MemeList.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    memes: state.memes,
  };
}

export default connect (mapStateToProps)(MemeList);
