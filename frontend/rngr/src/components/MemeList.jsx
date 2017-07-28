import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { router } from 'react-router';
import Sound from 'react-sound';
import { MEME_ADD_REQ } from '../actions';

import rngrLogo from '../assets/images/logo3.png';
import blank from '../assets/images/blank.png';
import add from '../assets/images/plus.png';
import remove from '../assets/images/delete.png';
import gear from '../assets/images/gear.png';
import logout from '../assets/images/logout.png';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

class MemeList extends React.Component {
  state = {
    status: Sound.status.STOPPED,
    url: '',
    icon1: blank,
    icon2: blank,
    icon3: blank,
    icon4: blank,
    icon5: blank,
    sound: 'sound0',
    editable: false,
    user0: {
      title: this.props.memes[this.props.users[0].v].title,
      url: this.props.memes[this.props.users[0].v].url,
      id: this.props.memes[this.props.users[0].v].id,
      blank: this.props.memes[this.props.users[0].v].blank,
    },
    user1: {
      title: this.props.memes[this.props.users[1].v].title,
      url: this.props.memes[this.props.users[1].v].url,
      id: this.props.memes[this.props.users[1].v].id,
      blank: this.props.memes[this.props.users[1].v].blank,
    },
    user2: {
      title: this.props.memes[this.props.users[2].v].title,
      url: this.props.memes[this.props.users[2].v].url,
      id: this.props.memes[this.props.users[2].v].id,
      blank: this.props.memes[this.props.users[2].v].blank,
    },
    user3: {
      title: this.props.memes[this.props.users[3].v].title,
      url: this.props.memes[this.props.users[3].v].url,
      id: this.props.memes[this.props.users[3].v].id,
      blank: this.props.memes[this.props.users[3].v].blank,
    },
    user4: {
      title: this.props.memes[this.props.users[4].v].title,
      url: this.props.memes[this.props.users[4].v].url,
      id: this.props.memes[this.props.users[4].v].id,
      blank: this.props.memes[this.props.users[4].v].blank,
    },
  }

  componentDidMount() {
    this.handleEditDashBoard();
  }

  sound0 = require('../assets/audio/' + this.state.user0.url);
  sound1 = require('../assets/audio/' + this.state.user1.url);
  sound2 = require('../assets/audio/' + this.state.user2.url);
  sound3 = require('../assets/audio/' + this.state.user3.url);
  sound4 = require('../assets/audio/' + this.state.user4.url);

  stopAudio = () => {
    this.setState({
      url: '',
      status: Sound.status.STOPPED,
      sound: 'sound',
    });
    const button1 = document.querySelector('#s0');
    const button2 = document.querySelector('#s1');
    const button3 = document.querySelector('#s2');
    const button4 = document.querySelector('#s3');
    const button5 = document.querySelector('#s4');
    button1.style.backgroundColor = '#ECECEC';
    button2.style.backgroundColor = '#ECECEC';
    button3.style.backgroundColor = '#ECECEC';
    button4.style.backgroundColor = '#ECECEC';
    button5.style.backgroundColor = '#ECECEC';
    button1.style.color = '#777';
    button2.style.color = '#777';
    button3.style.color = '#777';
    button4.style.color = '#777';
    button5.style.color = '#777';
  }

  playButton0 = () => {
    if (this.state.editable === false) {
      if (this.state.user0.blank === true) {
        this.props.router.push('/store/0');
      } else {
        this.props.dispatch({
          type: MEME_ADD_REQ,
          meme: {
            v: "0",
            id: "0",
          },
          index: {
            id: "0",
          },
        });
        this.setState({ user0: {
          title: this.props.memes[0].title,
          url: this.props.memes[0].url,
          id: this.props.memes[0].id,
          blank: this.props.memes[0].blank,
        }});
        this.setState({ icon1: add });
      }
    } else {
      if (this.state.user0.blank === false) {
        this.stopAudio();
        const button = document.querySelector('#s0');
        if (this.state.sound !== 'sound0') {
          this.setState({
            url: this.sound0,
            status: Sound.status.PLAYING,
            sound: 'sound0',
          });
          button.style.backgroundColor = '#C1026B';
          button.style.color = '#fff';
        }
      }
    }
  }

  playButton1 = () => {
    if (this.state.editable === false) {
      if (this.state.user1.blank === true) {
        this.props.router.push('/store/1');
      } else {
        this.props.dispatch({
          type: MEME_ADD_REQ,
          meme: {
            v: "0",
            id: "1",
          },
          index: {
            id: "1",
          },
        });
        this.setState({ user1: {
          title: this.props.memes[0].title,
          url: this.props.memes[0].url,
          id: this.props.memes[0].id,
          blank: this.props.memes[0].blank,
        }});
        this.setState({ icon2: add });
      }
    } else {
      if (this.state.user1.blank === false) {
        this.stopAudio();
        const button = document.querySelector('#s1');
        if (this.state.sound !== 'sound1') {
          this.setState({
            url: this.sound1,
            status: Sound.status.PLAYING,
            sound: 'sound1',
          });
          button.style.backgroundColor = '#C1026B';
          button.style.color = '#fff';
        }
      }
    }
  }

  playButton2 = () => {
    if (this.state.editable === false) {
      if (this.state.user2.blank === true) {
        this.props.router.push('/store/2');
      } else {
        this.props.dispatch({
          type: MEME_ADD_REQ,
          meme: {
            v: "0",
            id: "2",
          },
          index: {
            id: "2",
          },
        });
        this.setState({ user2: {
          title: this.props.memes[0].title,
          url: this.props.memes[0].url,
          id: this.props.memes[0].id,
          blank: this.props.memes[0].blank,
        }});
        this.setState({ icon3: add });
      }
    } else {
      if (this.state.user2.blank === false) {
        this.stopAudio();
        const button = document.querySelector('#s2');
        if (this.state.sound !== 'sound2') {
          this.setState({
            url: this.sound2,
            status: Sound.status.PLAYING,
            sound: 'sound2',
          });
          button.style.backgroundColor = '#C1026B';
          button.style.color = '#fff';
        }
      }
    }
  }

  playButton3 = () => {
    if (this.state.editable === false) {
      if (this.state.user3.blank === true) {
        this.props.router.push('/store/3');
      } else {
        this.props.dispatch({
          type: MEME_ADD_REQ,
          meme: {
            v: "0",
            id: "3",
          },
          index: {
            id: "3",
          },
        });
        this.setState({ user3: {
          title: this.props.memes[0].title,
          url: this.props.memes[0].url,
          id: this.props.memes[0].id,
          blank: this.props.memes[0].blank,
        }});
        this.setState({ icon4: add });
      }
    } else {
      if (this.state.user3.blank === false) {
        this.stopAudio();
        const button = document.querySelector('#s3');
        if (this.state.sound !== 'sound3') {
          this.setState({
            url: this.sound3,
            status: Sound.status.PLAYING,
            sound: 'sound3',
          });
          button.style.backgroundColor = '#C1026B';
          button.style.color = '#fff';
        }
      }
    }
  }

  playButton4 = () => {
    if (this.state.editable === false) {
      if (this.state.user4.blank === true) {
        this.props.router.push('/store/4');
      } else {
        this.props.dispatch({
          type: MEME_ADD_REQ,
          meme: {
            v: "0",
            id: "4",
          },
          index: {
            id: "4",
          },
        });
        this.setState({ user4: {
          title: this.props.memes[0].title,
          url: this.props.memes[0].url,
          id: this.props.memes[0].id,
          blank: this.props.memes[0].blank,
        }});
        this.setState({ icon5: add });
      }
    } else {
      if (this.state.user4.blank === false) {
        this.stopAudio();
        const button = document.querySelector('#s4');
        if (this.state.sound !== 'sound4') {
          this.setState({
            url: this.sound4,
            status: Sound.status.PLAYING,
            sound: 'sound4',
          });
          button.style.backgroundColor = '#C1026B';
          button.style.color = '#fff';
        }
      }
    }
  }

  handleEditDashBoard = () => {
    if (this.state.editable === true) {
      if (this.state.user0.blank === false) {
        this.setState({ icon1: remove });
      } else {
        this.setState({ icon1: add});
      }
      if (this.state.user1.blank === false) {
        this.setState({ icon2: remove });
      } else {
        this.setState({ icon2: add});
      }
      if (this.state.user2.blank === false) {
        this.setState({ icon3: remove });
      } else {
        this.setState({ icon3: add});
      }
      if (this.state.user3.blank === false) {
        this.setState({ icon4: remove });
      } else {
        this.setState({ icon4: add});
      }
      if (this.state.user4.blank === false) {
        this.setState({ icon5: remove });
      } else {
        this.setState({ icon5: add});
      }
      this.setState({ editable: false });
    } else {
      this.setState({
        icon1: blank,
        icon2: blank,
        icon3: blank,
        icon4: blank,
        icon5: blank,
        editable: true,
      });
    }
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
          <a href="http://localhost:3001/logout" class=""><img src={logout} /></a>
        </div>
        <div className="rngr-box">
          <button onTouchTap={this.playButton0} className="rngr-button" id="s0">{this.state.user0.title}<img src={this.state.icon1} alt="" /></button>
          <button onTouchTap={this.playButton1} className="rngr-button" id="s1">{this.state.user1.title}<img src={this.state.icon2} alt="" /></button>
          <button onTouchTap={this.playButton2} className="rngr-button" id="s2">{this.state.user2.title}<img src={this.state.icon3} alt="" /></button>
          <button onTouchTap={this.playButton3} className="rngr-button" id="s3">{this.state.user3.title}<img src={this.state.icon4} alt="" /></button>
          <button onTouchTap={this.playButton4} className="rngr-button" id="s4">{this.state.user4.title}<img src={this.state.icon5} alt="" /></button>
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
    users: state.users,
  };
}

export default connect (mapStateToProps)(MemeList);
