import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import ChannelThumbnail from './ChannelThumbnail';
import PropTypes from 'prop-types';

const resultsStyle = {
	maxWidth: "1328px",
	boxSizing: "border-box",
	width: "100%",
	margin: "0 auto",
	padding: "16px 24px"
}

const filterContainerStyle = {
	boxShadow: "0 1px #eee",
	height: "44px",
	display: "flex",
	alignItems: "center"
}

const filterStyle = {
	margin: "0",
	padding: "10px 16px",
	fontSize: ".9rem",
	color: "black"
}

const resultItemsStyle = {
	display: "grid",
	gridTemplateColumns: "1fr",
	gridGap: "15px"
}

const Results = ({searchResults}) => {

  	return (
		<div style={resultsStyle}>
			<div style={filterContainerStyle}>
				<p style={filterStyle}>FILTER</p>
			</div>
			<div style={resultItemsStyle}>
				{Object.keys(searchResults).map(function(index) {
					if (searchResults[index].id.kind === "youtube#video") {
						return <VideoThumbnail
							key={index}
							videoTitle={searchResults[index].snippet.title}
							videoDescription={searchResults[index].snippet.description}
							videoId={searchResults[index].id.videoId}
							channelId={searchResults[index].snippet.channelId}
							channelTitle={searchResults[index].snippet.channelTitle}
							image={searchResults[index].snippet.thumbnails.medium.url}
							publishedAt={searchResults[index].snippet.publishedAt} />
					} else {
						return <ChannelThumbnail
							key={index}
							channelTitle={searchResults[index].snippet.title}
							channelDescription={searchResults[index].snippet.description}
							channelId={searchResults[index].snippet.channelId}
							image={searchResults[index].snippet.thumbnails.high.url} />
					}
				})}
			</div>
		</div>
	);
}

Results.propTypes = {
 	searchResults: PropTypes.array
};

export default Results;