import PropTypes from 'prop-types';
import React from 'react';

import Like from '../CommentSection/Like 2';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.commentArr,
      comment: '',
      likes: props.likes
    }
  }

  changeComment = event => {
    this.setState({
      comment: event.target.value
    })
  }

  submitComment = event => {
    event.preventDefault();
    const id = this.state.comments.length + 1;
    const newCommentObject = {
      id: id,
      username: "tomerds",
      text: this.state.comment
    };
    const comments = this.state.comments.slice();
    comments.push(newCommentObject);

    this.setState({
      comments: comments,
      comment: ''
    })
  }

  increaseLike = event => {
    event.preventDefault();
    const likes = this.state.likes + 1;
    this.setState({
      likes: likes
    })
  }

  render() {
    // console.log(this.state.comments)
    return (
      <div className="comment-wrapper">
        <Like numLikes={this.state.likes} increaseLike={this.increaseLike} />
        {this.state.comments.map(element => {
          return (
            <div className="comment-container" key={element.id} >
              <Comment userName={element.username} text={element.text} />
            </div>
          )
        }
        )}
        <CommentInput changeComment={this.changeComment} submitComment={this.submitComment} comment={this.state.comment} />
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