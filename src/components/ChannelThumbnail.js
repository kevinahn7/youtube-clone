import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const channelThumbnailStyle = {
    display: "grid",
    gridTemplateColumns: "246px auto",
    gridTemplateRows: "152px",
    cursor: "pointer",
    minWidth: "100%"
    // overflow: "hidden" to fix sizing issue when shrunk, just limit the words in the description
}

const imageContainerStyle = {
    width: "100%",
    textAlign: "center"
}

const imageStyle = {
    width: "136px",
    borderRadius: "50%",
    marginRight: "16px"
}

const infoStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 16px",
    paddingBottom: "30px"
}

const channelTitleStyle = {
    fontSize: "1.1rem",
    fontWeight: "400",
    lineHeight: "2.4rem"
}

const channelInfoStyle = {
    color: "hsla(0, 0%, 7%, 0.6)",
    fontSize: "0.83rem",
    margin: "0"
}

const channelDescriptionStyle = {
    color: "hsla(0, 0%, 7%, 0.6)",
    fontSize: "0.83rem",
    marginTop: "7px",
    marginBottom: "10px",
    lineHeight: "1.1rem"
}

const ChannelThumbnail = (props) => {

    const getDescription = () => {
        let description = props.channelDescription;
        if (description.length < 130) return description
        else return (`${description.substring(0, 130)}...`)
    }

    const logChannelId = (channelId) => {
        console.log(channelId)
    }

    return (
        <div style={channelThumbnailStyle} onClick={() => logChannelId(props.channelId)}>
            <span style={imageContainerStyle}>
                <img style={imageStyle} src={props.image} />
            </span>
            <div style={infoStyle}>
                <span style={channelTitleStyle}>{props.channelTitle}</span>
                <p style={channelInfoStyle}>123,123 subscribers • 49 videos</p>
                <p style={channelDescriptionStyle}>{getDescription()}</p>
            </div>
        </div>
    );
}

ChannelThumbnail.propTypes = {
    channelTitle: PropTypes.string,
    channelDescription: PropTypes.string,
    channelId: PropTypes.string,
    image: PropTypes.string,
    // subscriberCount: PropTypes.string,
    // videoCount: PropTypes.string
};

export default connect()(ChannelThumbnail);
