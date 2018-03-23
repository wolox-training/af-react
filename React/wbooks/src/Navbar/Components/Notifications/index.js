import React from 'react';

import BookCover from '../../../Components/BookCover';

import './style.css';

function Notifications() {
  const exampleImage = 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg';
  return (
    <div className="notifications-container">
      <div className="notification">
        <BookCover imageUrl={exampleImage} imgStyle="book-img" defaultStyle="default-img" title="title" />
        <div className="data-container">
          <span className="book-status">Se encuentra disponible el libro</span>
          <h3 className="book-title">Titulo</h3>
          <span className="book-author">Autor</span>
        </div>
      </div>
      <div className="notification">
        <BookCover imageUrl={exampleImage} imgStyle="book-img" defaultStyle="default-img" title="title" />
        <div className="data-container">
          <span className="book-status">Se encuentra disponible el libro</span>
          <h3 className="book-title">Titulo</h3>
          <span className="book-author">Autor</span>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
