import * as types from './../constants/ActionTypes';

export function fetchSearchResult(searchQuery) {
	return function(dispatch) {
		dispatch(requestSearch(searchQuery));
		return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchQuery + '&maxResults=20&key=' + process.env.REACT_APP_API_KEY)
			.then(
				response => response.json(),
				error => console.log('An error occured.', error)
			).then(function(json) {
				let searchResults = json.items;
				dispatch(receiveSearch(searchResults));
			})
	}
}

export const requestSearch = (searchQuery) => ({
	type: types.REQUEST_SEARCH,
	searchQuery
});

export const receiveSearch = (searchResults) => ({
	type: types.RECEIVE_SEARCH,
	searchResults
});

export function fetchVideo(videoId) {
	return function(dispatch) {
		dispatch(requestVideo(videoId));
		return fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,player&id=' + videoId + '&maxHeight=8192&maxWidth=8192&key=' + process.env.REACT_APP_API_KEY)
			.then(
				response => response.json(),
				error => console.log('An error occured.', error)
			).then(function(json) {
				let currentVideo = json.items[0];
				dispatch(receiveVideo(currentVideo));
			})
	}
}

export const requestVideo = (videoId) => ({
	type: types.REQUEST_VIDEO,
	videoId
});

export const receiveVideo = (currentVideo) => ({
	type: types.RECEIVE_VIDEO,
	currentVideo
});
