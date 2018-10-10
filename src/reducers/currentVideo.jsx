import constants from '../constants';
const { initialState, types } = constants;

const currentVideo = ( state = initialState, action ) => {
	let newState;
	switch(action.type) {
		case types.REQUEST_VIDEO:
			newState = Object.assign({}, state, {
				isFetching: true
			})
			return newState;
		case types.RECEIVE_VIDEO:
			newState = Object.assign({}, state, {
				isFetching: false,
				currentVideo: action.currentVideo
			})
			return newState;
		case types.REQUEST_CHANNEL_INFO:
			newState = Object.assign({}, state, {
				isFetching: true
			})
			return newState
		case types.RECEIVE_CHANNEL_INFO:
			newState = Object.assign({}, state, {
				isFetching: false,
				channelInfo: action.channel
			})
			return newState;
		case types.REQUEST_VIDEO_COMMENTS:
			newState = Object.assign({}, state, {
				isFetching: true
			})
			return newState;
		case types.RECEIVE_VIDEO_COMMENTS:
			newState = Object.assign({}, state, {
				isFetching: false,
				comments: action.comments
			})
			return newState;
		case types.RECEIVE_MORE_COMMENTS:
			newState = Object.assign({}, state, {
				comments: {
					items: state.comments.items.concat(action.newComments.items),
					nextPageToken: action.newComments.nextPageToken
				}
			})
			return newState;
		default:
			return state;
	}
}

export default currentVideo;
