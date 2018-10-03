import React from 'react';
import PropTypes from 'prop-types';
import thumbsUp from '../assets/thumbsUp.svg';
import thumbsDown from '../assets/thumbsDown.svg';

const commentStyle = {
  marginBottom: "25px"
}

const commentInfoStyle = {
  display: "grid",
  gridTemplateColumns: "56px auto"
}

const imageStyle = {
  width: "40px",
  borderRadius: "50%"
}

const commentHeaderStyle = {
  marginBottom: "8px"
}

const channelNameStyle = {
  fontSize: "0.85rem",
  marginRight: "10px",
  fontWeight: "1000"
}

const commentDateStyle = {
  fontSize: "0.85rem",
  color: "hsla(0, 0%, 53%, 1)"
}

const commentTextContainer = {
  marginBottom: "6px"
}

const commentTextStyle = {
  fontSize: "0.85rem"
}

const commentOptionsStyle = {
  display: "flex",
  alignItems: "center",
  color: "hsla(0, 0%, 53%, 1)",
  height: "32px"
}

const thumbStyle = {
  width: "20px",
  paddingRight: "6px",
  opacity: "0.4"
}

const likeStyle = {
  fontSize: "0.81rem",
  marginRight: "16px"
}

const replyButtonStyle = {
  padding: "8px 16px"
}

const viewReplyContainerStyle = {
  margin: "10px 0"
}

const viewReplyStyle = {
  paddingLeft: "56px",
  fontSize: "0.85rem",
  fontWeight: "1000"
}

const convertDate = (commentDate) => {
  let theDate = commentDate;
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
  let theCommentDate = new Date(year, month, day, hour, minute);
  let nowDate = new Date(currentYear, currentMonth, currentDay, currentHour, currentMinute)
  let minutesSincePost = (Math.floor(((nowDate - theCommentDate) / (1000 * 60))) + 420)
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

const Comment = (props) => {
  return (
    <div style={commentStyle}>
      <div style={commentInfoStyle}>
        <div>
          <img src={props.channelImage} style={imageStyle}/>
        </div>
        <div>
          <div style={commentHeaderStyle}>
            <span style={channelNameStyle}>{props.channelName}</span>
            <span style={commentDateStyle}>{convertDate(props.publishedDate)}</span>
          </div>
          <div style={commentTextContainer}>
            <span style={commentTextStyle}>{props.commentText}</span>
          </div>
          <div style={commentOptionsStyle}>
            <img src={thumbsUp} style={thumbStyle} />
            <span style={likeStyle}>{props.commentLikes}</span>
            <img src={thumbsDown} style={thumbStyle} />
            <span style={replyButtonStyle}>REPLY</span>
          </div>
        </div>
      </div>
      <div style={viewReplyContainerStyle}>
        <span style={viewReplyStyle}>View Reply</span>
      </div>
    </div>
  )
}

Comment.propTypes = {
  channelName: PropTypes.string,
  channelId: PropTypes.string,
  channelImage: PropTypes.string,
  publishedDate: PropTypes.string,
  commentId: PropTypes.string,
  commentText: PropTypes.string,
  commentLikes: PropTypes.number,
  commentReplies: PropTypes.object
}

export default Comment;
