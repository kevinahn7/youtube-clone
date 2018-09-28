import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const imageStyle = {
    width: "246px",
    height: "138px"
}

const VideoThumbnail = (props) => {
    return (
        <div>
            <img style={imageStyle} src={props.image} />
            <p>{props.videoTitle}</p>
        </div>
    );
}

VideoThumbnail.propTypes = {
    videoTitle: PropTypes.string,
    videoDescription: PropTypes.string,
    channelId: PropTypes.string,
    channelTitle: PropTypes.string,
    image: PropTypes.string,
    publishedAt: PropTypes.datetime
};

export default connect()(VideoThumbnail);
