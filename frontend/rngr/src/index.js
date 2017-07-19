import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import allReducers from './reducers';
import routes from './routes';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const memestore = createStore(allReducers);

render(
  <Provider store={memestore} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root'),
);
