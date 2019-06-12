import React from 'react';

import heart from './../../assets/heart.svg';

const Like = props => {
  return (
    <div className="like-wrapper">
      <img src={heart} alt="Heart" />
      <div className="like-counter">
        <span>{props.numLikes} likes</span>
      </div>
    </div>
  )
}

export default Like;