import React from 'react';



//this will need to be changed to a class component as we will want it to update state

const CommentInput = () => {
  return (
    <form>
      <input type="text" placeholder="Add a comment..." />
    </form>
  )
}

export default CommentInput;