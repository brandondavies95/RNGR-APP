import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeView from './components/HomeView';
import MemeList from './components/MemeList';
import MemeStore from './components/MemeStore';
import GetMemes from './components/GetMemes.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="/home" component={MemeList} />
    <Route path="/store" component={MemeStore} />
    <Route path="/profile" component={GetMemes} />
  </Route>
);
