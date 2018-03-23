import React from 'react';
import PropTypes from 'prop-types';

import BookCover from '../../../../../Components/BookCover';

import './style.css';

function BookInfo({ author, title, imageUrl }) {
  return (
    <div className="book-info">
      <BookCover imageUrl={imageUrl} imgStyle="book-image" />
      <h4 className="book-title">{title}</h4>
      <span className="book-author">{author}</span>
    </div>
  );
}

BookInfo.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default BookInfo;
