import constants from './../constants';
const { initialState, types } = constants;

const currentSearchReducer = ( state = initialState, action ) => {
  let newState
  switch(action.type) {
    case types.REQUEST_SEARCH:
      newState = Object.assign({}, state, {
        isFetching: true,
        searchQuery: action.searchQuery
      })
      return newState;
    case types.RECEIVE_SEARCH:
      newState = Object.assign({}, state, {
        isFetching: false,
        searchResults: action.searchResults
      })
      return newState;
    default:
      return state;
  }
};

export default currentSearchReducer;
