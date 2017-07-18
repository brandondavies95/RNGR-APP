import { combineReducers } from 'redux';
import SongReducer from './reducer-memes';

import items from './items';
import logins from './logins';

const rootReducer = combineReducers({
  items,
  logins,
});

// This file combines any reducers we may have.
// take chunks of data from other reducers and make one

export const memeReducer = combineReducers({
  memes: SongReducer,
});

export default rootReducer;
