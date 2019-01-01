import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import ChannelThumbnail from './ChannelThumbnail';
import PropTypes from 'prop-types';
import { fetchMoreSearchResults } from './../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import loading from '../assets/loading.gif';
import Tune from "@material-ui/icons/Tune";
import Button from '@material-ui/core/Button';

class Results extends React.Component {
	constructor(props) {
		super(props)
		this.throttledFunction = _.throttle(this.handleScroll, 1000);
	}

	loadMore = (searchQuery, pageToken) => {
		this.props.dispatch(fetchMoreSearchResults(searchQuery, pageToken))
	}

	handleScroll = () => {
		let distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;
		if (distanceFromBottom < 300) this.loadMore(this.props.currentSearch.searchQuery, this.props.currentSearch.pageToken);
	}

	resultsContainerStyle = {
		boxSizing: "border-box",
		width: "100%",
		margin: "0 auto",
		padding: "16px 24px",
		backgroundColor: "hsla(0, 0%, 98%, 1)"
	}

	resultsStyle = {
		maxWidth: "1280px",
		width: "100%",
		margin: "0 auto"
	}

	filterContainerStyle = {
		boxShadow: "0 1px rgba(200, 200, 200, 1",
		height: "44px",
		display: "flex",
		alignItems: "center",
		marginBottom: "17px",
		marginTop: "1px",
		opacity: "0.6"
	}

	filterButtonStyle = {
		padding: "10px 17px",
		position: "relative",
		left: "-17px"
	}

	filterStyle = {
		margin: "0",
		marginLeft: "8px",
		fontSize: ".86rem",
		color: "black",
		fontWeight: "500"
	}

	resultItemsStyle = {
		display: "grid",
		gridTemplateColumns: "1fr"
	}

	loadingStyle = {
		display: "block",
		margin: "20% auto"
	}

	componentDidMount() {
		window.addEventListener('scroll', this.throttledFunction);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.throttledFunction);
	}

	render() {
		let currentSearch = this.props.currentSearch;
		let searchResults = currentSearch.searchResults;
		return (
			<div style={this.resultsContainerStyle}>
				<div style={this.resultsStyle}>
					<div style={this.filterContainerStyle}>
						<Button style={this.filterButtonStyle}>
							<Tune />
							<span style={this.filterStyle}>FILTER</span>
						</Button>
					</div>
					{(searchResults) ?
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
										publishedAt={searchResults[index].snippet.publishedAt}
										// viewCount={searchResults[index].statistics.viewCount}
										/>
								} else if (searchResults[index].id.kind === "youtube#channel"){
									return <ChannelThumbnail
										key={index}
										channelTitle={searchResults[index].snippet.title}
										channelDescription={searchResults[index].snippet.description}
										channelId={searchResults[index].snippet.channelId}
										image={searchResults[index].snippet.thumbnails.high.url}
										// subscriberCount={searchResults[index].statistics.subscriberCount}
										// videoCount={searchResults[index].statistics.videoCount}
										/>
								} //Add youtube playlist conditional
							})}
						</div> : <img src={loading} style={this.loadingStyle} />}
				</div>
			</div>
		);
	}

}

Results.propTypes = {
	currentSearch: PropTypes.object
};

export default connect()(Results);
