import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import items from './items';
import logins from './logins';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  items,
  logins,
});

export default rootReducer;
