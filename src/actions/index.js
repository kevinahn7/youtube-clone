import * as types from './../constants/ActionTypes';

export function fetchSearchResult(searchQuery) {
	return function(dispatch) {
		dispatch(requestSearch(searchQuery));
		// let searchResults;
		// let pageToken;
		return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchQuery + '&maxResults=20&key=' + process.env.REACT_APP_API_KEY)
			.then(
				response => response.json(),
				error => console.log('An error occured.', error)
			).then(function(json) {
				let searchResults = json.items;
				let pageToken = json.nextPageToken;
				// for (let i = 0; i < searchResults.length; i++) {
				// 	if (searchResults[i].id.kind === "youtube#video") {
				// 		fetch('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + searchResults[i].id.videoId + '&maxHeight=8192&maxWidth=8192&key=' + process.env.REACT_APP_API_KEY)
				// 			.then(
				// 				response => response.json(),
				// 				error => console.log('An error occured.', error)
				// 			).then(function(json) {
				// 				searchResults[i].statistics = json.items[0].statistics
				// 			})
				// 	} else if (searchResults[i].id.kind === "youtube#channel") {
				// 		fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + searchResults[i].id.channelId + '&maxHeight=8192&maxWidth=8192&key=' + process.env.REACT_APP_API_KEY)
				// 			.then(
				// 				response => response.json(),
				// 				error => console.log('An error occured.', error)
				// 			).then(function(json) {
				// 				searchResults[i].statistics = json.items[0].statistics
				// 			})
				// 	}
				// 	console.log(searchResults)
				// }
			// }).then(function() {
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

export function fetchChannelInfo(channelId) {
	return function(dispatch) {
		dispatch(requestChannelInfo());
		return fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=' + channelId + '&key=' + process.env.REACT_APP_API_KEY)
		.then(
			response => response.json(),
			error => console.log('An error occured.', error)
		).then(function(json) {
			let channelInfo = json.items[0];
			dispatch(receiveChannelInfo(channelInfo))
		})
	}
}

export const requestChannelInfo = () => ({
	type: types.REQUEST_CHANNEL_INFO
});

export const receiveChannelInfo = (channel) => ({
	type: types.RECEIVE_CHANNEL_INFO,
	channel
});

export function fetchChannelId(videoId) {
	return function() {
		return fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,player&id=' + videoId + '&maxHeight=8192&maxWidth=8192&key=' + process.env.REACT_APP_API_KEY)
		.then(
			response => response.json(),
			error => console.log('An error occured.', error)
		)
	}
}

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

export function fetchVideoComments(videoId) {
	return function(dispatch) {
		dispatch(requestVideoComments());
		return fetch('https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=' + videoId + '&key=' + process.env.REACT_APP_API_KEY)
		.then(
			response => response.json(),
			error => console.log('An error occured.', error)
		).then(function(json) {
			let comments = json;
			dispatch(receiveVideoComments(comments))
		})
	}
}

export const requestVideoComments = () => ({
	type: types.REQUEST_VIDEO_COMMENTS
});

export const receiveVideoComments = (comments) => ({
	type: types.RECEIVE_VIDEO_COMMENTS,
	comments
});

export function fetchMoreVideoComments(videoId, pageToken) {
	return function(dispatch) {
		return fetch('https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=' + videoId + '&pageToken=' + pageToken + '&key=' + process.env.REACT_APP_API_KEY)
			.then(
				response => response.json(),
				error => console.log('An error occured.', error)
			).then(function(json) {
				let newComments = json;
				if (newComments.items) dispatch(receiveMoreComments(newComments));
			})
	}
};

export const receiveMoreComments = (newComments) => ({
	type: types.RECEIVE_MORE_COMMENTS,
	newComments
});