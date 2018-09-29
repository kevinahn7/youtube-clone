import React from 'react';
import PropTypes from 'prop-types';

const Watch = ({currentVideo}) => {
	return (
		<div>
			{currentVideo.id}
		</div>
	);
}

Watch.propTypes = {
	currentVideo: PropTypes.object
};

export default Watch;
