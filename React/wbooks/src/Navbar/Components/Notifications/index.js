import React from 'react';

import BookCover from '../../../Components/BookCover';

import './style.css';

function Notifications() {
  return (
    <div className="notifications-container">
      <div className="notification">
        <BookCover imageUrl={null} imgStyle="book-img" defaultStyle="default-img" />
        <div className="data-container">
          <span className="book-status">Se encuentra disponible el libro</span>
          <h3 className="book-title">Titulo</h3>
          <span className="book-author">Autor</span>
        </div>
      </div>
      <div className="notification">
        <BookCover imageUrl={null} imgStyle="book-img" defaultStyle="default-img" />
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
