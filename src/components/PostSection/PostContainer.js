import './Post.css';

import React from 'react';

import CommentContainer from '../CommentSection/CommentContainer';


const PostContainer = props => {

  return (
    <div className="post-container-wrapper" >
      <div className="post-header">
        <div className="post-thumb-wrapper">
          <img
            alt="post header"
            className="post-thumb"
            src={props.data.thumbnailUrl}
          />
        </div>
        <div>{props.data.username}</div>
      </div>
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.data.imageUrl}
        />
      </div>
      <CommentContainer commentArr={props.data.comments} likes={props.data.likes} />
    </div>
  )
}
export default PostContainer;