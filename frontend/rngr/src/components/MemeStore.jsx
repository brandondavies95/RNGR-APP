import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { router } from 'react-router';
import Sound from 'react-sound';
import { MEME_ADD_REQ } from '../actions';

import play from '../assets/images/play-button.png';
import pause from '../assets/images/pause.png';
import add from '../assets/images/plus.png';
import rngrLogo from '../assets/images/logo3.png';
import logout from '../assets/images/logout.png';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  memes: PropTypes.array.isRequired,
};

class MemeStore extends React.Component {
  state = {
    icon: play,
    icon1: add,
    prevButton: null,
    url: '',
    status: Sound.status.STOPPED,
  }

  buttonHandler = (e) => {
    if (e.target.id === 'meme') {
      console.log('meme');
    } else {
      const activeButtonId = e.target.id;
      const activeButton = document.querySelector(`#${activeButtonId}`);
      if (activeButton.classList[1] === 'rngr-store') {
        if (this.state.prevButton) {
          this.state.prevButton.classList.add('rngr-store');
        }
        activeButton.classList.remove('rngr-store');
        this.setState({ prevButton: activeButton });
        this.stopAudio();
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
  }

  stopAudio = () => {
    this.setState({
      url: '',
      status: Sound.status.STOPPED,
      icon: play,
    });
  }

  addMeme = (e) => {
    const version = e.target.name;
    this.props.dispatch({
      type: MEME_ADD_REQ,
      meme: {
        v: version,
        id: this.props.params.indexId,
      },
      index: {
        id: this.props.params.indexId,
      },
    });
    this.props.router.push('/home');
  }

  render() {
    return (
      <div className="rngr-wrapper">
        <div className="rngr-header">
          <img alt="logo" src={rngrLogo} />
          <a href="http://localhost:3001/logout" class=""><img src={logout} /></a>
        </div>
        <h1>Meme Store</h1>
        <div className="rngr-store-box">
          {
            this.props.memes.map((meme) => {
              if (meme.blank === false) {
                return (
                  <button onTouchTap={this.buttonHandler} name={meme.v} className="rngr-button rngr-store" id={meme.id}><button onTouchTap={this.addMeme} ><img name={meme.v} src={this.state.icon1} id="meme" /></button>{meme.title}<img src={this.state.icon} id={meme.id} name={meme.v} /></button>
                );
              }
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

MemeStore.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    memes: state.memes,
    user: state.userMemes,
  };
}

export default connect (mapStateToProps)(MemeStore);
