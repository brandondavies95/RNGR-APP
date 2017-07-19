import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

function mapStateToProps(state) {
  return {
    memes: state.memes,
  };
}

export default connect (mapStateToProps)(App);
