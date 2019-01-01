import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVideo, fetchChannelInfo, fetchVideoComments } from './../actions';
import convertDate from '../methods/convertDate';

const videoThumbnailStyle = {
  display: "grid",
  gridTemplateColumns: "246px auto",
  gridTemplateRows: "138px",
  minWidth: "100%",
  marginBottom: "16px"
}

const imageStyle = {
  width: "246px",
  height: "138px"
}

const infoStyle = {
  display: "flex",
  padding: "0 16px",
  width: "600px",
  marginTop: "-7px"
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
    props.dispatch(fetchVideoComments(videoId));
  }

  return (
      <div style={videoThumbnailStyle}>
        <Link to={`/watch/${props.videoId}`}>
          <img style={imageStyle} src={props.image} onClick={() => handleVideoClick(props.videoId, props.channelId)} />
        </Link>
        <div style={infoStyle} onClick={() => handleVideoClick(props.videoId, props.channelId)}>
          <Link to={`/watch/${props.videoId}`}>
            <span style={videoTitleStyle}>{props.videoTitle}</span>
            <p style={videoInfoStyle}>{props.channelTitle} {props.viewCount} • {convertDate(props.publishedAt)}</p>
            <p style={videoDescriptionStyle}>{props.videoDescription}</p>
          </Link>
        </div>
      </div>
  );
}

VideoThumbnail.propTypes = {
  videoTitle: PropTypes.string,
  videoDescription: PropTypes.string,
  videoId: PropTypes.string,
  channelId: PropTypes.string,
  channelTitle: PropTypes.string,
  image: PropTypes.string,
  publishedAt: PropTypes.string,
  // viewCount: PropTypes.string
};

export default connect()(VideoThumbnail);
