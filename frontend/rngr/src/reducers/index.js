import { combineReducers } from 'redux';
import SongReducer from './reducer-memes';

// This file combines any reducers we may have.
// take chunks of data from other reducers and make one

const allReducers = combineReducers({
  memes: SongReducer,
});

export default allReducers;
