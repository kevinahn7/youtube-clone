import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult, fetchVideo } from './../actions';

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

	formatLikesDislikes = (number) => {
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

	viewCountStyle = {

	}

	componentDidMount() {
		let pathName = this.props.location.pathname;
		if (pathName.substring(1,6) === "watch") {
			this.props.dispatch(fetchVideo(pathName.slice(7, pathName.length)))
		}
	}

	render() {
		{this.aspectRatioStyle = this.getAspectRatio()}
		return (
			<div style={this.watchStyle}>
				<div>
					<div style={this.aspectRatioStyle}>
						<iframe style={this.playerStyle} src={"\/\/www.youtube.com/embed/" + this.props.currentVideo.id+ "?autoplay=1&mute=1"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
					</div>
					<div style={this.videoInfoStyle}>
						<h1 style={this.videoTitleStyle}>{this.props.currentVideo.snippet.title}</h1>
						<div style={this.videoInfoStatsStyle}>
							<span style={this.viewCountStyle}>{this.formatViews(this.props.currentVideo.statistics.viewCount)} views</span>
							<span id="videoOptions">
								<span>Likes: {this.formatLikesDislikes(this.props.currentVideo.statistics.likeCount)}</span>
								<span>Dislikes: {this.formatLikesDislikes(this.props.currentVideo.statistics.dislikeCount)}</span>
								<span>SHARE</span>
								<span>SAVE</span>
							</span>
						</div>
					</div>
				</div>
				<div style={this.recommendationsStyle}>Recommendations</div>
			</div>
		);
	}
}

Watch.propTypes = {
	currentVideo: PropTypes.object
};

export default withRouter(connect()(Watch));
