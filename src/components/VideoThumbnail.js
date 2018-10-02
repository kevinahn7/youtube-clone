import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVideo, fetchChannelInfo } from './../actions';

const videoThumbnailStyle = {
    display: "grid",
    gridTemplateColumns: "246px auto",
    gridTemplateRows: "138px",
    cursor: "pointer",
    minWidth: "100%"
}

const imageStyle = {
    width: "246px",
    height: "138px"
}

const infoStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "0 16px"
}

const videoTitleStyle = {
    fontSize: "1.1rem",
    fontWeight: "400",
    lineHeight: "2.4rem",
    height: "30px",
    color: "black",
    marginBottom: "2px"
}

const videoInfoStyle = {
    color: "hsla(0, 0%, 7%, 0.6)",
    fontSize: "0.83rem",
    margin: "0",
    textDecoration: "none"
}

const videoDescriptionStyle = {
    color: "hsla(0, 0%, 7%, 0.6)",
    fontSize: "0.83rem",
    marginTop: "7px",
    marginBottom: "10px",
    lineHeight: "1.1rem",
    maxWidth: "600px"
}

const VideoThumbnail = (props) => {

    const handleVideoClick = (videoId, channelId) => {
        props.dispatch(fetchVideo(videoId));
        props.dispatch(fetchChannelInfo(channelId));
    }

    return (
        <Link to={`/watch/${props.videoId}`}>
            <div style={videoThumbnailStyle} onClick={() => handleVideoClick(props.videoId, props.channelId)}>
                <img style={imageStyle} src={props.image} />
                <div style={infoStyle}>
                    <span style={videoTitleStyle}>{props.videoTitle}</span>
                    <p style={videoInfoStyle}>{props.channelTitle} 10K views · 10 hours ago</p>
                    <p style={videoDescriptionStyle}>{props.videoDescription}</p>
                </div>
            </div>
        </Link>

    );
}

VideoThumbnail.propTypes = {
    videoTitle: PropTypes.string,
    videoDescription: PropTypes.string,
    videoId: PropTypes.string,
    channelId: PropTypes.string,
    channelTitle: PropTypes.string,
    image: PropTypes.string,
    publishedAt: PropTypes.string
};

export default connect()(VideoThumbnail);
