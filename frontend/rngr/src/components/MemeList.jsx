import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import play from '../assets/images/play-button.svg';
import pause from '../assets/images/pause.svg';
import rngrLogo from '../assets/images/fake-rngrLogo.png';
import edit from '../assets/images/plus.svg';
import gear from '../assets/images/gear.png';

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
    editable: false,
    user: [
      {
        title: this.props.memes[12].title,
        url: this.props.memes[12].url,
        id: this.props.memes[12].id,
      },
      {
        title: this.props.memes[10].title,
        url: this.props.memes[10].url,
        id: this.props.memes[10].id,
      },
      {
        title: this.props.memes[13].title,
        url: this.props.memes[13].url,
        id: this.props.memes[13].id,
      },
      {
        title: this.props.memes[5].title,
        url: this.props.memes[5].url,
        id: this.props.memes[5].id,
      },
      {
        title: this.props.memes[9].title,
        url: this.props.memes[9].url,
        id: this.props.memes[9].id,
      },
    ],
  }

  sound0 = require('../assets/audio/' + this.state.user[0].url);
  sound1 = require('../assets/audio/' + this.state.user[1].url);
  sound2 = require('../assets/audio/' + this.state.user[2].url);
  sound3 = require('../assets/audio/' + this.state.user[3].url);
  sound4 = require('../assets/audio/' + this.state.user[4].url);

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

  handleEditDashBoard = () => {
    this.setState({
      icon1: edit,
      icon2: edit,
      icon3: edit,
      icon4: edit,
      icon5: edit,
    });
  }

  render() {
    return (
      <div className="rngr-wrapper">
        <Sound
          url={this.state.url}
          playStatus={this.state.status}
          volume={80}
          onPlaying={this.playAudio}
          onFinishedPlaying={this.stopAudio}
        />
        <div className="rngr-header">
          <img src={rngrLogo} />
        </div>
        <div className="rngr-box">
          <button onTouchTap={this.playButton0} className="rngr-button" id="s0">{this.state.user[0].title}<img src={this.state.icon1} alt="" /></button>
          <button onTouchTap={this.playButton1} className="rngr-button" id="s1">{this.state.user[1].title}<img src={this.state.icon2} alt="" /></button>
          <button onTouchTap={this.playButton2} className="rngr-button" id="s2">{this.state.user[2].title}<img src={this.state.icon3} alt="" /></button>
          <button onTouchTap={this.playButton3} className="rngr-button" id="s3">{this.state.user[3].title}<img src={this.state.icon4} alt="" /></button>
          <button onTouchTap={this.playButton4} className="rngr-button" id="s4">{this.state.user[4].title}<img src={this.state.icon5} alt="" /></button>
          <button onTouchTap={this.handleEditDashBoard} className="gear"><img src={gear} /></button>
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
