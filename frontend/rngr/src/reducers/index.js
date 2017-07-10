import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import items from './items';
import logins from './logins';

export default combineReducers({
  items,
  logins,
  routing,
});
