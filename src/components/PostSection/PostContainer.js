import './Post.css';

import React from 'react';

import CommentContainer from '../CommentSection/CommentContainer';


const PostContainer = props => {

  return (
    <div className="post-container-wrapper" >
      <CommentContainer commentArr={props.data.comments} />
    </div>
  )
}
export default PostContainer;