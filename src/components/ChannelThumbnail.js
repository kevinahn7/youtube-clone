import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ChannelThumbnail = (props) => {
    return (
        <div>
            <img src={props.image} />
            <p>{props.channelTitle}</p>
        </div>
    );
}

ChannelThumbnail.propTypes = {
    channelTitle: PropTypes.string,
    channelDescription: PropTypes.string,
    channelId: PropTypes.string,
    image: PropTypes.string,
    publishedAt: PropTypes.datetime
};

export default connect()(ChannelThumbnail);
