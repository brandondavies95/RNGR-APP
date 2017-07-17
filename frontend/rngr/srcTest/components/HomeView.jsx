import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MemeList from './MemeList';

const propTypes = {
  items: PropTypes.array,
};

const defaultProps = {
  items: [],
};

class HomeView extends Component {
  state = {
    currentItem: this.props.items[0],
  }

  render() {
    return (
      <div>
        <h1>RNGR</h1>
        <MemeList />
      </div>
    );
  }
}

HomeView.propTypes = propTypes;
HomeView.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(HomeView);
