import { combineReducers } from 'redux';
import currentSearchReducer from './currentSearch';
import currentVideoId from './currentVideoId';

const rootReducer = combineReducers({
  currentSearch: currentSearchReducer,
  currentVideoId: currentVideoId
});

export default rootReducer;
