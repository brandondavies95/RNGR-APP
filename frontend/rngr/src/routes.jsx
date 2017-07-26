import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NotFoundView from './components/NotFoundView';
import HomeView from './components/HomeView';
import MemeStore from './components/MemeStore';
import MemeList from './components/MemeList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="/home" component={MemeList} />
    <Route path="/store(/:indexId)" component={MemeStore} />
    <Route path="/profile" component={MemeList} />
    <Route path="*" component={NotFoundView} />
  </Route>
);
