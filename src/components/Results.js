import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import ChannelThumbnail from './ChannelThumbnail';
import PropTypes from 'prop-types';

function Results({searchResults}){

	function logIndex(index) {
		console.log(index)
	}

  return (
		<div>
			{Object.keys(searchResults).map(function(index) {
				if (searchResults[index].id.kind === "youtube#video") {
					return <VideoThumbnail
						key={index}
						title={searchResults[index].snippet.channelTitle}
						onClick={() => logIndex(index)} />
				} else {
					return <ChannelThumbnail
						key={index}
						 />
				}

			})}
		</div>
	);
	}

Results.propTypes = {
 	searchResults: PropTypes.array
};

export default Results;