import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult, fetchVideo, fetchChannelInfo, fetchChannelId } from './../actions';
import thumbsUp from '../assets/thumbsUp.svg';
import thumbsDown from '../assets/thumbsDown.svg';

class Watch extends React.Component {
	constructor(props) {
		super(props)
	}
	width = this.props.currentVideo.player.embedWidth;
	height = this.props.currentVideo.player.embedHeight;
	ratio = this.height/this.width*100;

	aspectRatioStyle = {
		position: "relative",
		width: "100%",
		height: "0",
		paddingBottom: '' + this.ratio +'%'
	}

	formatViews = (viewCount) => {
		return viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	formatNumber = (number) => {
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

	recommendationsStyle = {
		width: "402px"
	}

	watchStyle = {
		display: "grid",
		gridTemplateColumns: "auto 400px",
		gridGap: "24px",
		maxWidth: "1754px",
		margin: "0 auto",
		padding: "24px",
		boxSizing: "border-box"
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

	shareOptionStyle = {
		padding: "0 8px",
		fontSize: "0.9rem",
		height: "22px",
		display: "flex",
		alignItems: "center"
	}

	saveOptionStyle = {
		padding: "0 8px",
		fontSize: "0.9rem",
		height: "22px",
		display: "flex",
		alignItems: "center"
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
		borderBottom: " 1px solid hsl(0, 0%, 93%)",
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
		width: "99%",
		height: "80%",
		padding: "8px 13px",
		color: "white",
		backgroundColor: "#ff0000",
		fontSize: "0.82rem",
		letterSpacing: "0.4px"
	}

	subscribeTextStyle = {
		height: "16px"
	}

	descriptionContainerStyle = {
		paddingLeft: "64px"
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
		let pathName = this.props.location.pathname;
		if (pathName.substring(1,6) === "watch") {
			this.props.dispatch(fetchVideo(pathName.slice(7, pathName.length)))
			let getChannelByVideoId=fetchChannelId(pathName.slice(7, pathName.length))
			getChannelByVideoId().then((json)=>{this.props.dispatch(fetchChannelInfo(json.items[0].snippet.channelId))})
		}
	}

	render() {
		{this.aspectRatioStyle = this.getAspectRatio()}
		{console.log(this.props.channelInfo)}
		return (
			<div style={this.watchStyle}>
				<div>
					<div style={this.aspectRatioStyle}>
						<iframe style={this.playerStyle} src={"\/\/www.youtube.com/embed/" + this.props.currentVideo.id+ "?autoplay=1&mute=1"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
					</div>
					<div style={this.videoInfoStyle}>
						<h1 style={this.videoTitleStyle}>{this.props.currentVideo.snippet.title}</h1>
						<div style={this.videoInfoStatsStyle}>
							<span>{this.formatViews(this.props.currentVideo.statistics.viewCount)} views</span>
							<span style={this.videoOptionsStyle}>
								<span style={this.likeDislikeStyle}><img src={thumbsUp} style={this.thumbsStyle} /> {this.formatNumber(this.props.currentVideo.statistics.likeCount)}</span>
								<span style={this.likeDislikeStyle}><img src={thumbsDown} style={this.thumbsStyle} /> {this.formatNumber(this.props.currentVideo.statistics.dislikeCount)}</span>
								<span style={this.shareOptionStyle}>SHARE</span>
								<span style={this.saveOptionStyle}>SAVE</span>
							</span>
						</div>
					</div>
					<div style={this.allDescriptionStyle}>
						<div style={this.descriptionInfoStyle}>
							<img src={this.props.channelInfo.snippet.thumbnails.default.url} style={this.channelThumbnailStyle}/>
							<div style={this.channelTitleAndDateStyle}>
								<span style={this.channelTitleStyle}>{this.props.currentVideo.snippet.channelTitle}</span>
								<span style={this.dateStyle}>{this.convertDate()}</span>
							</div>
							<div style={this.subscribeContainerStyle}>
								<button style={this.subscribeStyle}><span style={this.subscribeTextStyle}>SUBSCRIBE {this.formatNumber(this.props.channelInfo.statistics.subscriberCount)}</span></button>
							</div>
						</div>
						<div style={this.descriptionContainerStyle}>
							<span>{this.props.currentVideo.snippet.description}</span>
						</div>
					</div>
				</div>
				<div style={this.recommendationsStyle}>
					Recommendations
				</div>
			</div>
		);
	}
}

Watch.propTypes = {
	currentVideo: PropTypes.object,
	channelInfo: PropTypes.object
};

export default withRouter(connect()(Watch));
