import React from 'react';

const Comment = ({ author, content }) => {
  return (
    <div className="comment">
      <p><strong>{author}</strong>: {content}</p> {/*recebendo parametros do autor e comentarios */}
    </div>
  )
}

export default Comment;
