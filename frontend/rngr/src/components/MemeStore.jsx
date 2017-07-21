import React from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import play from '../assets/images/play-button.svg';
import pause from '../assets/images/pause.svg';
import rngrLogo from '../assets/images/fake-rngrLogo.png';

class MemeStore extends React.Component {
  state = {
    icon: play,
    prevButton: null,
    url: '',
    status: Sound.status.STOPPED,
  }

  buttonHandler = (e) => {
    const activeButtonId = e.target.id;
    const activeButton = document.querySelector(`#${activeButtonId}`);
    if (activeButton.classList[1] === 'rngr-store') {
      if (this.state.prevButton) {
        this.state.prevButton.classList.add('rngr-store');
      }
      activeButton.classList.remove('rngr-store');
      this.setState({ prevButton: activeButton });
    } else {
      if (this.state.status === Sound.status.STOPPED) {
        const meme = e.target.name;
        const url = this.props.memes[meme].url;
        const audio = require('../assets/audio/' + url);
        this.setState({ url: audio, status: Sound.status.PLAYING, icon: pause });
      } else {
        this.stopAudio();
      }
    }
  }

  stopAudio = () => {
    this.setState({
      url: '',
      status: Sound.status.STOPPED,
      icon: play,
    })
  }

  getMemes = () => {
    this.props.memes.map((meme) => {
      return (
        <button onTouchTap={this.buttonHandler} name={meme.v} className="rngr-button rngr-store" id={meme.id}>{meme.title}<img src={this.state.icon} /></button>
      );
    })
  }

  render() {
    const rngrStore = document.querySelector('.rngr-store-box');
    return (
      <div className="rngr-wrapper">
        <div className="rngr-header">
          <img src={rngrLogo} />
        </div>
        <div className="rngr-store-box">
          {
            this.props.memes.map((meme) => {
              return (
                <button onTouchTap={this.buttonHandler} name={meme.v} className="rngr-button rngr-store" id={meme.id}>{meme.title}<img src={this.state.icon} /></button>
              );
            })
          }
        </div>
        <Sound
          url={this.state.url}
          playStatus={this.state.status}
          volume={80}
          onPlaying={this.playAudio}
          onFinishedPlaying={this.stopAudio}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    memes: state.memes,
  };
}

export default connect (mapStateToProps)(MemeStore);
