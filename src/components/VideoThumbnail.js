import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const VideoThumbnail = (props) => {
    return (
        <div>
            {props.videoTitle}
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
