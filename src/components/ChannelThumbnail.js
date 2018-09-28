import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



const imageStyle = {
    width: "136px",
    borderRadius: "50%"
}

const imageContainerStyle = {
    width: "246px",
    textAlign: "center"
}

const ChannelThumbnail = (props) => {
    return (
        <div>
            <div style={imageContainerStyle}>
                <img style={imageStyle} src={props.image} />
            </div>
            <h3>{props.channelTitle}</h3>
        </div>
    );
}

ChannelThumbnail.propTypes = {
    channelTitle: PropTypes.string,
    channelDescription: PropTypes.string,
    channelId: PropTypes.string,
    image: PropTypes.string
};

export default connect()(ChannelThumbnail);
