import { combineReducers } from 'redux';
import currentSearchReducer from './currentSearch';
import currentVideoReducer from './currentVideo';

const rootReducer = combineReducers({
  currentSearch: currentSearchReducer,
  currentVideo: currentVideoReducer
});

export default rootReducer;
