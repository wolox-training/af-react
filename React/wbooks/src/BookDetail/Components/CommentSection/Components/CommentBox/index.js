import React from 'react';

import profilePicture from '../../../../../assets/cat_no_banana.jpeg';

import './style.css';

function CommentBox() {
  return (
    <div className="comment-container">
      <img alt="profile" src={profilePicture} className="comment-image" />
      <div className="comment-subcontainer">
        <h4 className="comment-title">Agregar comentario</h4>
        <textarea className="comment-textarea" rows="4" cols="90" />
        <button className="send-comment-button">Enviar</button>
      </div>
    </div>
  );
}

export default CommentBox;
