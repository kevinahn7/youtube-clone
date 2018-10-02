import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import ChannelThumbnail from './ChannelThumbnail';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchMoreSearchResults } from './../actions';
import { connect } from 'react-redux';

class Results extends React.Component {
	constructor(props) {
		super(props)
	}

	loadMore = (searchQuery, pageToken) => {
		this.props.dispatch(fetchMoreSearchResults(searchQuery, pageToken))
	}

	handleScroll = (searchQuery, pageToken) => {
		let distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;
		if (distanceFromBottom < 300) this.loadMore(searchQuery, pageToken)
	}

	resultsStyle = {
		maxWidth: "1328px",
		boxSizing: "border-box",
		width: "100%",
		margin: "0 auto",
		padding: "16px 24px"
	}

	filterContainerStyle = {
		boxShadow: "0 1px #eee",
		height: "44px",
		display: "flex",
		alignItems: "center"
	}

	filterStyle = {
		margin: "0",
		padding: "10px 16px",
		fontSize: ".9rem",
		color: "black"
	}

	resultItemsStyle = {
		display: "grid",
		gridTemplateColumns: "1fr",
		gridGap: "15px"
	}

	componentDidMount() {
		window.addEventListener('scroll',() => { this.handleScroll(this.props.currentSearch.searchQuery, this.props.currentSearch.pageToken) })
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	render() {
		let currentSearch = this.props.currentSearch
		let searchResults = currentSearch.searchResults;
		return (
			<div style={this.resultsStyle}>
				<div style={this.filterContainerStyle}>
					<p style={this.filterStyle}>FILTER</p>
				</div>
				<div style={this.resultItemsStyle}>
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
						} else if (searchResults[index].id.kind === "youtube#channel"){
							return <ChannelThumbnail
								key={index}
								channelTitle={searchResults[index].snippet.title}
								channelDescription={searchResults[index].snippet.description}
								channelId={searchResults[index].snippet.channelId}
								image={searchResults[index].snippet.thumbnails.high.url} />
						} //Add youtube playlist conditional
					})}
				</div>
			</div>
		);
	}

}

Results.propTypes = {
	currentSearch: PropTypes.object
};

export default connect()(Results);
