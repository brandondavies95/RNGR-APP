import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MemeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memes: [],
    };
  }

  createMemeItems() {
    return this.props.memes.map((sound) => {
      return (
        <div>
          <li key={sound.id}>{sound.meme}</li>
        </div>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createMemeItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    memes: state.memes,
  };
}

// Making component aware of applications store and exporting. Smart component
export default connect(mapStateToProps)(MemeList);
