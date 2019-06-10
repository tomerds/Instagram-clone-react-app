import React from 'react';

const Comment = props => {
  console.log(props)
  return (
    <div className="comment">
      <span className="comment-username">{props.userName}</span>
      <span className="comment-text">{props.text}</span>
    </div>
  )
}
export default Comment;