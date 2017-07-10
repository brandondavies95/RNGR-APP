import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NotFoundView from './components/NotFoundView';
import HomeView from './components/HomeView';
import LoginView from './components/LoginView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="/login" component={LoginView} />
    <Route path="/profile" component={HomeView} />
    <Route path="*" component={NotFoundView} />
  </Route>
);
