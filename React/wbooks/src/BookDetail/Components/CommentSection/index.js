import React from 'react';

import './style.scss';
import CommentBox from './Components/CommentBox';
import CommentList from './Components/CommentList';

function CommentSection() {
  return (
    <div>
      <h3 className="green-title">Comentarios</h3>
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default CommentSection;
