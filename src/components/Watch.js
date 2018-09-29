import React from 'react';
import PropTypes from 'prop-types';

const Watch = ({currentVideo}) => {

	return (
		<div>
			{currentVideo.player.embedHtml}
			{/* need to turn html string into dom element */}
		</div>
	);
}

Watch.propTypes = {
	currentVideo: PropTypes.object
};

export default Watch;
