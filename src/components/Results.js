import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import ChannelThumbnail from './ChannelThumbnail';
import PropTypes from 'prop-types';

const resultsStyle = {
	maxWidth: "1280px",
	boxSizing: "border-box",
	width: "100%",
	margin: "0 auto",
	padding: "16px 24px"
}

const Results = ({searchResults}) => {

	function logIndex(index) {
		console.log(index)
	}

  return (
		<div style={resultsStyle}>
			<div>Filter</div>
			{Object.keys(searchResults).map(function(index) {
				if (searchResults[index].id.kind === "youtube#video") {
					return <VideoThumbnail
						key={index}
						videoTitle={searchResults[index].snippet.title}
						videoDescription={searchResults[index].snippet.description}
						channelId={searchResults[index].snippet.channelId}
						channelTitle={searchResults[index].snippet.channelTitle}
						image={searchResults[index].snippet.thumbnails.medium.url}
						publishedAt={searchResults[index].snippet.publishedAt}
						
						onClick={() => logIndex(index)} />
				} else {
					return <ChannelThumbnail
						key={index}
						channelTitle={searchResults[index].snippet.title}
						channelDescription={searchResults[index].snippet.description}
						channelId={searchResults[index].snippet.channelId}
						image={searchResults[index].snippet.thumbnails.high.url}
						onClick={() => logIndex(index)} />
				}

			})}
		</div>
	);
	}

Results.propTypes = {
 	searchResults: PropTypes.array
};

export default Results;