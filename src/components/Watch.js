import React from 'react';
import PropTypes from 'prop-types';

const Watch = ({currentVideo}) => {

	return (
		<div>
			{/* {console.log(currentVideo)} */}
			<iframe width="480" height="270" src="//www.youtube.com/embed/cQ_i5tYJ2_k" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
			{/* Add the video id to the url */}
		</div>
	);
}

Watch.propTypes = {
	currentVideo: PropTypes.object
};

export default Watch;
