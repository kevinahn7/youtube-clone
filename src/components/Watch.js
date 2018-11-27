import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchVideo, fetchChannelInfo, fetchChannelId, fetchVideoComments, fetchMoreVideoComments } from './../actions';
import loading from '../assets/loading.gif';
import avatar from '../assets/avatar.png';
import Comment from './Comment';
import _ from 'lodash';
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Sort from "@material-ui/icons/Sort";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Reply from "@material-ui/icons/Reply";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

class Watch extends React.Component {
	constructor(props) {
		super(props)
		this.throttledFunction = _.throttle(this.handleScroll, 1000);
	}

	handleScroll = () => {
		let distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;
		if (distanceFromBottom < 300) this.loadMore(this.props.currentVideo.id, this.props.currentVideoComments.nextPageToken);
	}

	loadMore = (videoId, pageToken) => {
		this.props.dispatch(fetchMoreVideoComments(videoId, pageToken));
	}

	formatViews = (viewCount) => {
		return viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	formatNumber = (number) => {
		if (number > 999999) return (`${Math.trunc(number/100000)/10}M`);
		else if (number > 999) return (`${Math.trunc(number/100)/10}K`);
		else return number
	}

	formatSubscriptionNumber = (number) => {
		if (number > 999999) return (`${Math.trunc(number/1000000)}M`);
		else if (number > 999) return (`${Math.trunc(number/1000)}K`);
		else return number
	}

	getAspectRatio = () => {
		return {
			position: "relative",
			width: "100%",
			height: "0",
			paddingBottom: `${this.props.currentVideo.player.embedHeight/this.props.currentVideo.player.embedWidth*100}%`
			//maxWidth is dependant on the aspect ratio on YouTube
		}
	}

	getLikePercentage = () => {
		return {
			width: `${(parseInt(this.props.currentVideo.statistics.likeCount)/(parseInt(this.props.currentVideo.statistics.dislikeCount) + parseInt(this.props.currentVideo.statistics.likeCount)))*100}%`,
			position: "absolute",
			backgroundColor: "hsla(0, 0%, 56%, 1)",
			height: "2px",
			marginTop: "23px",
			zIndex: "4"
		}
	}

	videoSideStyle = {
		padding: "24px",
		minWidth: "640px"
	}

	recommendationsStyle = {
		padding: "24px 24px 0 0",
		boxSizing: "border-box"
	}

	watchStyle = {
		display: "grid",
		gridTemplateColumns: "auto 426px",
		maxWidth: "1754px",
		margin: "0 auto",
		boxSizing: "border-box",
		backgroundColor: "white"
	}

	watchContainerStyle = {
		maxWidth: "1754px",
		margin: "0 auto",
		paddingTop: "1px"
	}

	playerStyle = {
		position: "absolute",
		width: "100%",
		height: "100%",
		left: "0",
		top: "0"
	}

	videoInfoStyle = {
		padding: "20px 0 4px 0",
		borderBottom: " 1px solid hsl(0, 0%, 93%)"
	}

	videoTitleStyle = {
		fontSize: "1.13rem",
		fontWeight: "400",
		margin: "0",
		paddingBottom: "3px"
	}

	videoInfoStatsStyle = {
		display: "flex",
		justifyContent: "space-between",
		height: "40px",
		alignItems: "center",
		color: "hsla(0, 0%, 7%, 0.6)"
	}

	likeBarContainerStyle = {
		width: "140px",
		position: "absolute"
	}

	likeBarBaseStyle = {
		width: "140px",
		position: "absolute",
		backgroundColor: "hsla(0, 0%, 80%, 1)",
		height: "2px",
		marginTop: "23px"
	}

	videoOptionsStyle = {
		display: "flex",
		alignItems: "center"
	}

	likeDislikeStyle = {
		display: "flex",
		alignItems: "center",
		padding: "0 8px",
		fontSize: "0.8rem"
	}

	thumbsStyle = {
		opacity: "0.8",
		width: "20px",
		height: "20px",
		padding: "8px"
	}

	shareStyle = {
		opacity: "0.7",
		width: "20px",
		height: "20px",
		transform: "scaleX(-1)"
	}

	playlistAddStyle = {
		height: "20px",
		width: "20px",
		opacity: "0.7"
	}

	smallIconButtonStyle = {
		height: "36px",
		width: "36px",
		padding: "0"
	}

	largeIconButtonStyle = {
		width: "40px",
		height: "40px",
		padding: "0"
	}

	dotsStyle = {
		width: "26px",
		height: "26px",
		opacity: "0.7",
		marginLeft: "20px",
		marginRight: "16px"
	}

	shareOptionStyle = {
		padding: "0 8px",
		fontSize: "0.8rem",
		height: "22px",
		display: "flex",
		alignItems: "center",
		fontWeight: "500",
		color: "hsla(0, 0%, 6.7%, 0.4)",
		cursor: "pointer"
	}

	channelThumbnailStyle = {
		width: "48px",
		borderRadius: "50%",
		marginRight: "16px"
	}

	channelTitleAndDateStyle = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	}

	channelTitleStyle = {
		fontSize: "0.88rem",
		fontWeight: "500",
		marginBottom: "2px"
	}

	dateStyle = {
		color: "hsla(0, 0%, 7%, 0.6)",
		fontSize: "0.82rem"
	}

	allDescriptionStyle = {
		borderBottom: "1px solid hsl(0, 0%, 93%)",
		marginBottom: "24px",
		paddingBottom: "16px"
	}

	descriptionInfoStyle = {
		paddingTop: "16px",
		height: "50px",
		marginBottom: "12px",
		display: "grid",
		gridTemplateColumns: "64px auto 145px"
	}

	subscribeContainerStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}

	subscribeStyle = {
		width: "100%",
		height: "80%",
		padding: "10px",
		color: "white",
		backgroundColor: "#ff0000",
		fontSize: "0.9rem",
		letterSpacing: "0.4px",
		borderRadius: "3%"
	}

	descriptionContainerStyle = {
		paddingLeft: "64px"
	}

	descriptionStyle = {
		fontFamily: "Roboto, Arial, sans-serif",
		fontSize: "0.9rem",
		lineHeight: "1.3rem",
		width: "100%"
	}

	loadingStyle = {
		display: "block",
		margin: "20% auto"
	}

	preCommentStyle = {
		margin: "24px 0 32px 0"
	}

	commentNumberAndSortStyle = {
		marginBottom: "24px",
		display: "flex",
		alignItems: "center"
	}

	commentNumberStyle = {
		marginRight: "30px"
	}

	sortIconStyle = {
		marginRight: "8px",
		opacity: "0.5"
	}

	sortByStyle = {
		color: "hsla(0, 0%, 7%, 0.6)",
		fontSize: "0.88rem",
		fontWeight: "500"
	}

	inputCommentFormStyle = {
		display: "grid",
		gridTemplateColumns: "56px auto"
	}

	avatarStyle = {
		width: "40px",
		borderRadius: "50%",
		marginRight: "8px"
	}

	inputCommentStyle = {
		width: "100%",
		display: "block"
	}

	inputStyle = {
		width: "100%",
		border: "none",
		outline: "none",
		fontSize: "0.9rem",
		borderBottom: "1px solid hsl(0, 0%, 93%)",
		height: "21px",
		paddingBottom: "4px"
	}

	commentLoadingStyle = {
		width: "50px",
		display: "block",
		margin: "0 auto"
	}

	convertDate() {
		const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let theDate = this.props.currentVideo.snippet.publishedAt;
		let monthInt = parseInt(theDate.substring(5, 7));
		let monthString = monthNames[monthInt-1];
		let day = parseInt(theDate.substring(8, 10));
		let year = theDate.substring(0, 4);
		return (`Published on ${monthString} ${day}, ${year}`);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		window.addEventListener('scroll', this.throttledFunction);
		let pathName = this.props.location.pathname;
		if (pathName.substring(1,6) === "watch") {
			this.props.dispatch(fetchVideo(pathName.slice(7, pathName.length)));
			let getChannelByVideoId=fetchChannelId(pathName.slice(7, pathName.length));
			getChannelByVideoId().then((json)=>{this.props.dispatch(fetchChannelInfo(json.items[0].snippet.channelId))});
			this.props.dispatch(fetchVideoComments(pathName.slice(7, pathName.length)));
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.throttledFunction);
	}

	render() {
		let currentVideo = this.props.currentVideo;
		let channelInfo = this.props.channelInfo;
		let currentVideoComments = this.props.currentVideoComments;
		let pathName = this.props.location.pathname;
		this.aspectRatioStyle = this.getAspectRatio()
		this.likeBarLikesStyle = this.getLikePercentage()
		return (
			<div style={this.watchContainerStyle}>
				{(channelInfo && currentVideo && currentVideoComments) ?
					<div style={this.watchStyle}>
						<div style={this.videoSideStyle}>
							<div style={this.aspectRatioStyle}>
								<iframe style={this.playerStyle} src={`//www.youtube.com/embed/${pathName.slice(7, pathName.length)}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
							</div>
							<div style={this.videoInfoStyle}>
								<h1 style={this.videoTitleStyle}>{currentVideo.snippet.title}</h1>
								<div style={this.videoInfoStatsStyle}>
									<span>{this.formatViews(currentVideo.statistics.viewCount)} views</span>
									<span style={this.videoOptionsStyle}>
										<Tooltip title="I like this" enterDelay={500} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
											<span style={this.likeDislikeStyle}><IconButton style={this.smallIconButtonStyle}><ThumbUp style={this.thumbsStyle} /></IconButton> {this.formatNumber(currentVideo.statistics.likeCount)}</span>
										</Tooltip>
										<Tooltip title="I dislike this" enterDelay={500} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
											<span style={this.likeDislikeStyle}><IconButton style={this.smallIconButtonStyle}><ThumbDown style={this.thumbsStyle} /></IconButton> {this.formatNumber(currentVideo.statistics.dislikeCount)}</span>
										</Tooltip>
										<div style={this.likeBarContainerStyle}>
											<div style={this.likeBarBaseStyle}></div>
											<div style={this.likeBarLikesStyle}></div>
										</div>
										<Tooltip title="Share" enterDelay={500} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
											<span style={this.shareOptionStyle}><IconButton style={this.smallIconButtonStyle}><Reply style={this.shareStyle} /></IconButton>SHARE</span>
										</Tooltip>
										<Tooltip title="Save to" enterDelay={500} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
											<IconButton style={this.smallIconButtonStyle}><PlaylistAdd style={this.playlistAddStyle}/></IconButton>
										</Tooltip>
										<IconButton style={this.largeIconButtonStyle}><MoreHoriz style={this.dotsStyle} /></IconButton>
									</span>
								</div>
							</div>
							<div style={this.allDescriptionStyle}>
								<div style={this.descriptionInfoStyle}>
									<img src={channelInfo.snippet.thumbnails.default.url} style={this.channelThumbnailStyle}/>
									<div style={this.channelTitleAndDateStyle}>
										<span style={this.channelTitleStyle}>{currentVideo.snippet.channelTitle}</span>
										<span style={this.dateStyle}>{this.convertDate()}</span>
									</div>
									<div style={this.subscribeContainerStyle}>
										<Button style={this.subscribeStyle}>SUBSCRIBE {this.formatSubscriptionNumber(channelInfo.statistics.subscriberCount)}</Button>
									</div>
								</div>
								<div style={this.descriptionContainerStyle}>
									<pre style={this.descriptionStyle}>{currentVideo.snippet.description}</pre>
								</div>
							</div>
							<div id="commentSection">
								<div id="comentsAndSortAndAddForm" style={this.preCommentStyle}>
									<div id="commentsAndSort" style={this.commentNumberAndSortStyle}>
										<span style={this.commentNumberStyle}>{this.formatViews(currentVideo.statistics.commentCount)} Comments</span>
										<Sort style={this.sortIconStyle}/>
										<span style={this.sortByStyle}>SORT BY</span>
									</div>
									<div style={this.inputCommentFormStyle}>
										<img src={avatar} style={this.avatarStyle} />
										<span style={this.inputCommentStyle}><input style={this.inputStyle} type="text" placeholder="Add a public comment..."/></span>
									</div>
								</div>
								{(currentVideoComments.items) ?
									<div id="comments">
										{Object.keys(currentVideoComments.items).map(function(index) {
											return<Comment
												key={index}
												channelName={currentVideoComments.items[index].snippet.topLevelComment.snippet.authorDisplayName}
												channelId={currentVideoComments.items[index].snippet.topLevelComment.snippet.authorChannelId.value}
												channelImage={currentVideoComments.items[index].snippet.topLevelComment.snippet.authorProfileImageUrl}
												publishedDate={currentVideoComments.items[index].snippet.topLevelComment.snippet.publishedAt}
												commentId={currentVideoComments.items[index].id}
												commentText={currentVideoComments.items[index].snippet.topLevelComment.snippet.textDisplay}
												commentLikes={currentVideoComments.items[index].snippet.topLevelComment.snippet.likeCount}
												commentReplies={currentVideoComments.items[index].replies} />
										})}
									</div> : <div></div>}
							</div>
						</div>

						<div style={this.recommendationsStyle}>
							Up next
						</div>
					</div> : <img src={loading} style={this.loadingStyle} />}
			</div>
		);
	}
}

Watch.propTypes = {
	currentVideo: PropTypes.object,
	channelInfo: PropTypes.object,
	currentVideoComments: PropTypes.object
};

export default withRouter(connect()(Watch));
