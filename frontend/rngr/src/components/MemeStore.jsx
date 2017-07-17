import React from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

import deezNuts from '../assets/audio/deezNuts.wav';
import cathMeOutside from '../assets/audio/howBoutDat.wav';
import bridgeMeme from '../assets/audio/jumpOffBridgeMeme.wav';
import sadViolin from '../assets/audio/sadViolin.wav';
import damnDaniel from '../assets/audio/damnDaniel.wav';
import hoodRat from '../assets/audio/hoodratstuffwithmyfriends.wav';
import iLikeTurtles from '../assets/audio/iliketurtles.wav';
import isThisRealLife from '../assets/audio/isthisreallife.wav';
import itsFunToDoBadThings from '../assets/audio/itsfuntodobadthings.wav';
import iYankedTheThing from '../assets/audio/iyankedthething.wav';
import leeroyJenkins from '../assets/audio/leeroyjenkins.wav';
import ohhhhh from '../assets/audio/ohhhhh.wav';
import thisIsSparta from '../assets/audio/thisissparta.wav';
import weatherBoy from '../assets/audio/weatherBoy.wav';

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
    icon: play,
  }

  expandHandler = (target, playFunc) => {
    if (target.classList.value === 'rngr-button rngr-store') {
      this.closeButtons();
      target.classList.remove('rngr-store');
    } else {
      playFunc();
    }
  }

  closeButtons = () => {
    const button = document.querySelector('#deezNuts');
    button.className = 'rngr-button rngr-store';
    const button1 = document.querySelector('#catchMe');
    button1.className = 'rngr-button rngr-store';
    const button2 = document.querySelector('#bridge');
    button2.className = 'rngr-button rngr-store';
    const button3 = document.querySelector('#sadViolin');
    button3.className = 'rngr-button rngr-store';
    const button4 = document.querySelector('#daniel');
    button4.className = 'rngr-button rngr-store';
    const button5 = document.querySelector('#hoodRat');
    button5.className = 'rngr-button rngr-store';
    const button6 = document.querySelector('#turtles');
    button6.className = 'rngr-button rngr-store';
    const button7 = document.querySelector('#realLife');
    button7.className = 'rngr-button rngr-store';
    const button8 = document.querySelector('#badThings');
    button8.className = 'rngr-button rngr-store';
    const button9 = document.querySelector('#yanked');
    button9.className = 'rngr-button rngr-store';
    const button10 = document.querySelector('#leeroy');
    button10.className = 'rngr-button rngr-store';
    const button11 = document.querySelector('#ohhhhh');
    button11.className = 'rngr-button rngr-store';
    const button12 = document.querySelector('#sparta');
    button12.className = 'rngr-button rngr-store';
    const button13 = document.querySelector('#weatherBoy');
    button13.className = 'rngr-button rngr-store';
  }

  stopAudio = () => {
    this.setState({
      status: Sound.status.STOPPED,
      sound: 'sound0',
      icon: play,
    });
  }

  clickHandler = (e) => {
    const active = e.target;
    if (this.state.status === Sound.status.STOPPED) {
      if (active.id === 'deezNuts') {
        const playAudio = () => {
          this.setState({ url: deezNuts, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'catchMe') {
        const playAudio = () => {
          this.setState({ url: cathMeOutside, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'bridge') {
        const playAudio = () => {
          this.setState({ url: bridgeMeme, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'sadViolin') {
        const playAudio = () => {
          this.setState({ url: sadViolin, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'daniel') {
        const playAudio = () => {
          this.setState({ url: damnDaniel, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'hoodRat') {
        const playAudio = () => {
          this.setState({ url: hoodRat, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'turtles') {
        const playAudio = () => {
          this.setState({ url: iLikeTurtles, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'realLife') {
        const playAudio = () => {
          this.setState({ url: isThisRealLife, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'badThings') {
        const playAudio = () => {
          this.setState({ url: itsFunToDoBadThings, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'yanked') {
        const playAudio = () => {
          this.setState({ url: iYankedTheThing, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'leeroy') {
        const playAudio = () => {
          this.setState({ url: leeroyJenkins, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'ohhhhh') {
        const playAudio = () => {
          this.setState({ url: ohhhhh, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'sparta') {
        const playAudio = () => {
          this.setState({ url: thisIsSparta, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
      if (active.id === 'weatherBoy') {
        const playAudio = () => {
          this.setState({ url: weatherBoy, status: Sound.status.PLAYING, icon: pause });
        };
        this.expandHandler(active, playAudio);
      }
    } else {
      this.stopAudio();
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
        <h1>RNGR</h1>
        <div className="rngr-box">
          <button onTouchTap={this.clickHandler} id="deezNuts" className="rngr-button rngr-store">deezNuts<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="catchMe" className="rngr-button rngr-store">Catch Me Outside<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="bridge" className="rngr-button rngr-store">Man Jumps Off Bridge<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="sadViolin" className="rngr-button rngr-store">Sad Violin<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="daniel" className="rngr-button rngr-store">Damn Daniel<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="hoodRat" className="rngr-button rngr-store">Hood Rat Stuff<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="turtles" className="rngr-button rngr-store">I Like Turtles<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="realLife" className="rngr-button rngr-store">Is this real Life?<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="badThings" className="rngr-button rngr-store">Its fun to do Bad things<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="yanked" className="rngr-button rngr-store">I yanked the Thing<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="leeroy" className="rngr-button rngr-store">Leeroy Jenkins!<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="ohhhhh" className="rngr-button rngr-store">OHHHHH!<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="sparta" className="rngr-button rngr-store">This is Sparta<img src={this.state.icon} alt="" /></button>
          <button onTouchTap={this.clickHandler} id="weatherBoy" className="rngr-button rngr-store">weatherBoy<img src={this.state.icon} alt="" /></button>
        </div>
      </div>
    );
  }
}

MemeList.propTypes = propTypes;

export default MemeList;
