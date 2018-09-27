import constants from './../constants';
const { initialState, types } = constants;

const currentSearchReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case types.REQUEST_SEARCH:
      return action.searchQuery;
    default:
      return state;
  }
};

export default currentSearchReducer;
