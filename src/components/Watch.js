import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchVideo, fetchChannelInfo, fetchChannelId, fetchVideoComments } from './../actions';
import thumbsUp from '../assets/thumbsUp.svg';
import thumbsDown from '../assets/thumbsDown.svg';
import share from '../assets/share.svg';
import dots from '../assets/dots.svg';
import loading from '../assets/loading.gif';
import commentLoading from '../assets/commentLoading.gif';
import avatar from '../assets/avatar.png';
import Comment from './Comment';

class Watch extends React.Component {
	constructor(props) {
		super(props)
	}

	formatViews = (viewCount) => {
		return viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	formatNumber = (number) => {
		if (number > 999999) return (Math.trunc(number/100000)/10 + "M")
		else if (number > 999) return (Math.trunc(number/100)/10 + "K");
		else return number
	}

	formatSubscriptionNumber = (number) => {
		if (number > 999999) return (Math.trunc(number/1000000) + "M")
		else if (number > 999) return (Math.trunc(number/1000) + "K");
		else return number
	}

	getAspectRatio = () => {
		return {
			position: "relative",
			width: "100%",
			height: "0",
			paddingBottom: '' + this.props.currentVideo.player.embedHeight/this.props.currentVideo.player.embedWidth*100 +'%'
		}
	}

	getLikePercentage = () => {
		return {
			width: '' + (parseInt(this.props.currentVideo.statistics.likeCount)/(parseInt(this.props.currentVideo.statistics.dislikeCount) + parseInt(this.props.currentVideo.statistics.likeCount)))*100 +'%',
			position: "absolute",
			backgroundColor: "hsla(0, 0%, 56%, 1)",
			height: "2px",
			marginTop: "27px",
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
		padding: "20px 0 8px 0",
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
		marginTop: "27px"
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
		opacity: "0.4",
		width: "23px",
		paddingRight: "8px"
	}

	shareStyle = {
		opacity: "0.4",
		width: "20px",
		padding: "8px"
	}

	dotsStyle = {
		opacity: "0.4",
		width: "24px",
		padding: "8px",
		height: "24px"
	}

	dotsContainerStyle = {
		height: "40px"
	}

	shareOptionStyle = {
		padding: "0 8px",
		fontSize: "0.8rem",
		height: "22px",
		display: "flex",
		alignItems: "center",
		fontWeight: "1000",
		color: "hsla(0, 0%, 6.7%, 0.4)"
	}

	saveOptionStyle = {
		padding: "0 8px",
		fontSize: "0.8rem",
		height: "22px",
		display: "flex",
		alignItems: "center",
		color: "hsla(0, 0%, 6.7%, 0.4)"
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
		fontWeight: "1000",
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
		padding: "8px 5px",
		color: "white",
		backgroundColor: "#ff0000",
		fontSize: "0.8rem",
		letterSpacing: "0.4px"
	}

	subscribeTextStyle = {
		height: "16px"
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
		marginBottom: "24px"
	}

	commentNumberStyle = {
		marginRight: "30px"
	}

	sortByStyle = {
		color: "hsla(0, 0%, 7%, 0.6)",
		fontSize: "0.88rem",
		fontWeight: "1000"
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
		let monthString = monthNames[monthInt-1]
		let day = parseInt(theDate.substring(8, 10));
		let year = theDate.substring(0, 4)
		return ("Published on " + monthString + " " + day + ", " + year)
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		let pathName = this.props.location.pathname;
		if (pathName.substring(1,6) === "watch") {
			this.props.dispatch(fetchVideo(pathName.slice(7, pathName.length)));
			let getChannelByVideoId=fetchChannelId(pathName.slice(7, pathName.length));
			getChannelByVideoId().then((json)=>{this.props.dispatch(fetchChannelInfo(json.items[0].snippet.channelId))});
			this.props.dispatch(fetchVideoComments(pathName.slice(7, pathName.length)));
		}
	}

	render() {
		let currentVideo = this.props.currentVideo;
		let channelInfo = this.props.channelInfo;
		let currentVideoComments = this.props.currentVideoComments;
		let pathName = this.props.location.pathname;

		{this.aspectRatioStyle = this.getAspectRatio()}
		{this.likeBarLikesStyle = this.getLikePercentage()}
		return (
			<div style={this.watchContainerStyle}>
				{(channelInfo && currentVideo && currentVideoComments) ?
					<div style={this.watchStyle}>
						<div style={this.videoSideStyle}>
							<div style={this.aspectRatioStyle}>
								<iframe style={this.playerStyle} src={"//www.youtube.com/embed/" + pathName.slice(7, pathName.length) + "?autoplay=1&mute=1"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
							</div>
							<div style={this.videoInfoStyle}>
								<h1 style={this.videoTitleStyle}>{currentVideo.snippet.title}</h1>
								<div style={this.videoInfoStatsStyle}>
									<span>{this.formatViews(currentVideo.statistics.viewCount)} views</span>
									<span style={this.videoOptionsStyle}>
										<span style={this.likeDislikeStyle}><img src={thumbsUp} style={this.thumbsStyle} /> {this.formatNumber(currentVideo.statistics.likeCount)}</span>
										<span style={this.likeDislikeStyle}><img src={thumbsDown} style={this.thumbsStyle} /> {this.formatNumber(currentVideo.statistics.dislikeCount)}</span>
										<div style={this.likeBarContainerStyle}>
											<div style={this.likeBarBaseStyle}></div>
											<div style={this.likeBarLikesStyle}></div>
										</div>
										<span style={this.shareOptionStyle}><img src={share} style={this.shareStyle} />SHARE</span>
										<span style={this.saveOptionStyle}>SAVE</span>
										<span style={this.dotsContainerStyle} ><img src={dots} style={this.dotsStyle} /></span>
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
										<button style={this.subscribeStyle}><span style={this.subscribeTextStyle}>SUBSCRIBE {this.formatSubscriptionNumber(channelInfo.statistics.subscriberCount)}</span></button>
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
										<span style={this.sortByStyle}>SORT BY</span>
									</div>
									<div style={this.inputCommentFormStyle}>
										<img src={avatar} style={this.avatarStyle} />
										<span style={this.inputCommentStyle}><input style={this.inputStyle} type="text" placeholder="Add a public comment..."/></span>
									</div>
								</div>
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
								</div>
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
