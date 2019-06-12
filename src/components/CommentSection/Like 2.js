import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Like = props => {
  return (
    <div className="like-wrapper">
      <div className="like-button" onClick={props.increaseLike}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <FontAwesomeIcon icon={faComment} />
      <div className="like-counter">
        <span>{props.numLikes} likes</span>
      </div>
    </div>
  )
}

export default Like;