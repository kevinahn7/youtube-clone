import * as types from './../constants/ActionTypes';

export function fetchSearchResult(searchQuery) {
  return function(dispatch) {
    dispatch(requestSearchResult(searchQuery));
    return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchQuery + '&maxResults=50&key=' + process.env.REACT_APP_API_KEY)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      ).then(function(json) {
        let searchResults = json.items;
        console.log(searchResults)
      })
  }
}

export const requestSearchResult = (searchQuery) => ({
  type: types.REQUEST_SEARCH,
  searchQuery
});
