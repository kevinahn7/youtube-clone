import { combineReducers } from 'redux';
import currentSearchReducer from './currentSearch';
import currentVideo from './currentVideo';

const rootReducer = combineReducers({
  currentSearch: currentSearchReducer,
  currentVideo: currentVideo
});

export default rootReducer;
