import React from 'react';



//this will need to be changed to a class component as we will want it to update state

const CommentInput = (props) => {
  return (
    <form onSubmit={props.submitComment} >
      <input type="text" placeholder="Add a comment..." value={props.comment} onChange={props.changeComment} />
    </form>
  )
}

export default CommentInput;