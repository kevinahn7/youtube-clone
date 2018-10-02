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
				let pageToken = json.nextPageToken;
				dispatch(receiveSearch(searchResults, pageToken));
			})
	}
}

export const requestSearch = (searchQuery) => ({
	type: types.REQUEST_SEARCH,
	searchQuery
});

export const receiveSearch = (searchResults, pageToken) => ({
	type: types.RECEIVE_SEARCH,
	searchResults,
	pageToken
});

export function fetchVideo(videoId) {
	return function(dispatch) {
		dispatch(requestVideo());
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

export const requestVideo = () => ({
	type: types.REQUEST_VIDEO
});

export const receiveVideo = (currentVideo) => ({
	type: types.RECEIVE_VIDEO,
	currentVideo
});

export function fetchChannelThumbnail(channelId) {
	return function(dispatch) {
		dispatch(requestChannelThumbnail())
		return fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet&id=' + channelId + '&key=' + process.env.REACT_APP_API_KEY)
		.then(
			response => response.json(),
			error => console.log('An error occured.', error)
		).then(function(json) {
			let channelInfo = json.items[0];
			console.log(channelInfo)
			dispatch(receiveChannelThumbnail(channelInfo))
		})
	}
}

export const requestChannelThumbnail = () => ({
	type: types.REQUEST_CHANNEL_THUMBNAIL
});

export const receiveChannelThumbnail = (channel) => ({
	type: types.RECEIVE_CHANNEL_THUMBNAIL,
	channel
});

export function fetchMoreSearchResults(searchQuery, pageToken) {
	return function(dispatch) {
		return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchQuery + '&maxResults=20&pageToken=' + pageToken + '&key=' + process.env.REACT_APP_API_KEY)
			.then(
				response => response.json(),
				error => console.log('An error occured.', error)
			).then(function(json) {
				let moreSearchResults = json.items;
				let morePageToken = json.nextPageToken;
				dispatch(receiveMoreSearch(moreSearchResults, morePageToken));
			})
	}
};

export const receiveMoreSearch = (moreSearchResults, morePageToken) => ({
	type: types.RECEIVE_MORE_SEARCH,
	moreSearchResults,
	morePageToken
});
