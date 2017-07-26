import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import memes from './reducer-memes';
import users from './reducer-users';

const rootReducer = combineReducers({
  routing: routerReducer,
  memes,
  users,
});

export default rootReducer;
