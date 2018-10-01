import React from 'react';
import PropTypes from 'prop-types';

const recommendationsStyle = {
	width: "402px"
}

const watchStyle = {
	display: "grid",
	gridTemplateColumns: "auto 400px"
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

	return (
		<div style={watchStyle}>
			{console.log(currentVideo)}
			<div style={aspectRatioStyle}>
				<iframe width="480" height="270" style={playerStyle} src={"\/\/www.youtube.com/embed/" + currentVideo.id} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
			</div>
			<div style={recommendationsStyle}>Recommendations</div>
		</div>
	);
}

Watch.propTypes = {
	currentVideo: PropTypes.object
};

export default Watch;
