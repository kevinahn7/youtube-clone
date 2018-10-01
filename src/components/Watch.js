import React from 'react';
import PropTypes from 'prop-types';

const Watch = ({currentVideo}) => {
	return (
		<div>
			{ console.log(currentVideo.player.embedHtml) }
			<iframe width="480" height="270" src={"\/\/www.youtube.com/embed/" + currentVideo.id} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
			{/* Add the video id to the url */}
			{/* If I have this, i dont think i will need to import player */}
		</div>
	);
}

Watch.propTypes = {
	currentVideo: PropTypes.object
};

export default Watch;
