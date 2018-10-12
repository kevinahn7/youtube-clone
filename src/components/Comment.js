import React from 'react';
import PropTypes from 'prop-types';
import convertDate from '../methods/convertDate';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

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
  width: "16px",
  height: "16px",
  paddingRight: "6px"
}

const likeStyle = {
  fontSize: "0.81rem",
  marginRight: "16px"
}

const replyButtonStyle = {
  padding: "8px 16px",
  fontSize: "0.8rem"
}

const viewReplyContainerStyle = {
  margin: "10px 0"
}

const viewReplyStyle = {
  paddingLeft: "56px",
  fontSize: "0.85rem",
  fontWeight: "1000",
  cursor: "pointer",
  display: "flex",
  alignItems: "center"
}

const arrowStyle = {
  height: "20px",
  width: "20px"
}

const Comment = (props) => {

  const getReplyText = () => {
    let replyLength = props.commentReplies.comments.length;
    if (replyLength === 1) return "View 1 Reply";
    else return `View ${replyLength} Replies`;
  }

  const hello = () => {
    console.log("hello")
  }

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
            <ThumbUp style={thumbStyle} />
            <span style={likeStyle}>{props.commentLikes}</span>
            <ThumbDown style={thumbStyle} />
            <span style={replyButtonStyle}>REPLY</span>
          </div>
        </div>
      </div>
      {(props.commentReplies) ? 
        <div style={viewReplyContainerStyle}>
          <span style={viewReplyStyle} onClick={() => hello()}>{getReplyText()} <KeyboardArrowDown style={arrowStyle}/></span>
        </div> : <div></div>}
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
