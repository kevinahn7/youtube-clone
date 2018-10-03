import React from 'react';
import PropTypes from 'prop-types';

const commentInfoStyle = {
  display: "grid",
  gridTemplateColumns: "56px auto"
}

const imageStyle = {
  width: "40px",
  borderRadius: "50%"
}

const Comment = (props) => {
  return (
    <div>
      <div style={commentInfoStyle}>
        <div>
          <img src={props.channelImage} style={imageStyle}/>
        </div>
        <div>
          <div>
            <span>{props.channelName}</span>
            <span>{props.publishedAt}</span>
          </div>
          <div>
            <span>{props.commentText}</span>
          </div>
          <div>
            <span>{props.commentLikes}</span>
          </div>
        </div>
      </div>
      <div>
        <span>View Reply</span>
      </div>
    </div>
  )
}

Comment.propTypes = {
  channelName: PropTypes.string,
  channelId: PropTypes.string,
  channelImage: PropTypes.string,
  publishedAt: PropTypes.string,
  commentId: PropTypes.string,
  commentText: PropTypes.string,
  commentLikes: PropTypes.number,
  commentReplies: PropTypes.object
}

export default Comment;
