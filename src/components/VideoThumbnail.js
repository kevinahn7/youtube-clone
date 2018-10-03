import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVideo, fetchChannelInfo, fetchVideoComments } from './../actions';

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
    window.scrollTo(0, 0);
    props.dispatch(fetchVideo(videoId));
    props.dispatch(fetchChannelInfo(channelId));
    props.dispatch(fetchVideoComments(videoId));
  }

  const convertDate = () => {
    let theDate = props.publishedAt;
    let month = parseInt(theDate.substring(5, 7))-1;
    let day = theDate.substring(8, 10);
    let year = theDate.substring(0, 4);
    let hour = theDate.substring(11, 13);
    let minute = theDate.substring(14, 16)
    let currentDate =  new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let videoDate = new Date(year, month, day, hour, minute);
    let nowDate = new Date(currentYear, currentMonth, currentDay, currentHour, currentMinute)
    let minutesSincePost = (Math.floor(((nowDate - videoDate) / (1000 * 60))) + 420)
    let minutesInHour = 60;
    let minutesInDay = minutesInHour * 24;
    let lessThanYear = Math.trunc(minutesSincePost / (minutesInDay * 365));
    let lessThanMonth = Math.trunc(minutesSincePost / (minutesInDay * 30));
    let lessThanDay = Math.trunc(minutesSincePost / minutesInDay);
    let lessThanHour = Math.trunc(minutesSincePost / minutesInHour);
    if (lessThanYear > 1) {
      return (lessThanYear + " years ago");
    } else if (lessThanYear === 1) {
      return "1 year ago";
    } else {
      if (lessThanMonth > 1) {
        return (lessThanMonth + " months ago");
      } else if (lessThanMonth === 1){
        return "1 month ago";
      } else {
        if (lessThanDay > 23) {
          return "4 weeks ago";
        } else if (lessThanDay > 17) {
          return "3 weeks ago";
        } else if (lessThanDay > 10) {
          return "2 weeks ago";
        } else if (lessThanDay > 6) {
          return "1 week ago";
        } else if (lessThanDay > 1) {
          return (lessThanDay + " days ago");
        } else if (lessThanDay === 1) {
          return "1 day ago";
        } else {
          if (lessThanHour > 1) {
            return (lessThanHour + " hours ago");
          } else if (lessThanHour === 1) {
            return "1 hours ago";
          } else {
            if (minutesSincePost > 1) {
              return (minutesSincePost + " minutes ago");
            } else if (minutesSincePost === 1) {
              return "1 minute ago";
            } else {
              return "Less than a minute ago";
            }
          }
        }
      }
    }
  }

  return (
    <Link to={`/watch/${props.videoId}`}>
      <div style={videoThumbnailStyle} onClick={() => handleVideoClick(props.videoId, props.channelId)}>
        <img style={imageStyle} src={props.image} />
        <div style={infoStyle}>
            <span style={videoTitleStyle}>{props.videoTitle}</span>
            <p style={videoInfoStyle}>{props.channelTitle} 10K views • {convertDate()}</p>
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
