/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './containers/Root';
import { store, history } from './store/configureStore';
import './index.css';
import allReducers from './reducers';
import App from './component-test/app';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const memestore = createStore(allReducers);

ReactDOM.render(
  // Store is available to every single component
  <Provider store={memestore}>
    <App />
  </Provider>
  , document.getElementById('root'));
