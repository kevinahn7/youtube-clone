import React from 'react';
import PropTypes from 'prop-types';

const recommendationsStyle = {
	width: "402px"
}

const watchStyle = {
	display: "grid",
	gridTemplateColumns: "auto 400px",
	gridGap: "24px",
	maxWidth: "1754px",
	margin: "0 auto",
	padding: "24px",
	boxSizing: "border-box"
}

const playerStyle = {
	position: "absolute",
	width: "100%",
	height: "100%",
	left: "0",
	top: "0"
}

const Watch = ({currentVideo}) => {
	const width = currentVideo.player.embedWidth;
	const height = currentVideo.player.embedHeight;
	const ratio = height/width*100;

	const aspectRatioStyle = {
		position: "relative",
		width: "100%",
		height: "0",
		paddingBottom: '' + ratio +'%'
	}

	const formatViews = (viewCount) => {
		return viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	return (
		<div style={watchStyle}>
			<div>
				<div style={aspectRatioStyle}>
					<iframe width="480" height="270" style={playerStyle} src={"\/\/www.youtube.com/embed/" + currentVideo.id} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
				</div>
				<div>
					{console.log(currentVideo)}
					<h1>{currentVideo.snippet.title}</h1>
					<div id="videoInfo">
						<span>{formatViews(currentVideo.statistics.viewCount)} views</span>
						<div id="videoOptions">
							<span>Likes: {currentVideo.statistics.likeCount}</span>
							<span>Dislikes: {currentVideo.statistics.dislikeCount}</span>
							<span>SHARE</span>
							<span>SAVE</span>
						</div>
					</div>
				</div>
			</div>

			<div style={recommendationsStyle}>Recommendations</div>
		</div>
	);
}

Watch.propTypes = {
	currentVideo: PropTypes.object
};

export default Watch;
