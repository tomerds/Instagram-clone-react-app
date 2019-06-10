import PropTypes from 'prop-types';
import React from 'react';

import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.commentArr
    }
  }

  render() {
    console.log(this.state.comments)
    return (
      <div className="comment-wrapper">
        {this.state.comments.map(element => {
          return (
            <div className="comment-container" key={element.id} >
              <Comment userName={element.username} text={element.text} />
            </div>
          )
        }
        )}
        <CommentInput />
      </div>
    )
  }
}

CommentContainer.propTypes = {
  commentArr: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })
  )
}

export default CommentContainer;