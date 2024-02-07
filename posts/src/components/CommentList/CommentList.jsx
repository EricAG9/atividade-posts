import React from 'react';
import Comment from '../Comment/Comment'; // Componente de Comentário

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <h3>Comentários</h3>
      {comments.map((comment, index) => (
        <Comment key={index} author={comment.author} content={comment.content} />  
        /* cria um componente para cada comentário no array, passando as propriedades author e content para cada um.Iterarando sobre os comentários e renderizar um componente para cada um deles. */
      ))}
    </div>
  );
};

export default CommentList;
