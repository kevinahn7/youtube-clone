import constants from './../constants';
const { initialState, types } = constants;

const currentSearchReducer = ( state = initialState, action ) => {
  let newState;
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
        searchResults: action.searchResults,
        pageToken: action.pageToken
      })
      return newState;
    case types.RECEIVE_MORE_SEARCH:
      newState = Object.assign({}, state, {
        searchResults: state.searchResults.concat(action.moreSearchResults),
        pageToken: action.morePageToken
      })
      return newState;
    default:
      return state;
  }
};

export default currentSearchReducer;
