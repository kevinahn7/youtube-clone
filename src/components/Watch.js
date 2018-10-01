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

	componentDidMount() {
		let pathName = this.props.location.pathname;
		if (pathName.substring(1,6) === "watch") {
			this.props.dispatch(fetchVideo(pathName.slice(7, pathName.length)))
		}
	}

	// componentDidUpdate() {
	// 	console.log("didupdate")
	// 	window.onpopstate  = (e) => {
	// 		let pathName = this.props.location.pathname;
	// 		if (pathName.substring(1,6) === "watch") {
	// 			this.props.dispatch(fetchVideo(pathName.slice(7, pathName.length)))
	// 		}
	// 	}
	// }

	render() {
		{this.aspectRatioStyle = {
			position: "relative",
			width: "100%",
			height: "0",
			paddingBottom: '' + this.props.currentVideo.player.embedHeight/this.props.currentVideo.player.embedWidth*100 +'%'
		}}
		return (
			<div style={this.watchStyle}>
				<div>
					<div style={this.aspectRatioStyle}>
						<iframe style={this.playerStyle} src={"\/\/www.youtube.com/embed/" + this.props.currentVideo.id+ "?autoplay=1&mute=1"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
					</div>
					<div>
						<h1>{this.props.currentVideo.snippet.title}</h1>
						{this.props.currentVideo.id}
						<div id="videoInfo">
							<span>{this.formatViews(this.props.currentVideo.statistics.viewCount)} views</span>
							<div id="videoOptions">
								<span>Likes: {this.props.currentVideo.statistics.likeCount}</span>
								<span>Dislikes: {this.props.currentVideo.statistics.dislikeCount}</span>
								<span>SHARE</span>
								<span>SAVE</span>
							</div>
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



//Gonna start chagning to class now
