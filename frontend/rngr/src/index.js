/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './containers/Root';
import { store, history } from './store/configureStore';
import './index.css';
import memeReducer from './reducers';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const memestore = createStore(memeReducer);

render(
  <Provider store={memestore}>
    <Root store={store} history={history} />
  </Provider>,
  document.getElementById('root'),
);
