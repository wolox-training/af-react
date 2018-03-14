import React from 'react';
import PropTypes from 'prop-types';

import '../../../../../application.css';

import BookCover from '../../../../../Components/BookCover';

function BookInfo({ author, title, imageUrl }) {
  const imgStyle = 'book-img';
  return (
    <div className="book-info">
      <BookCover imageUrl={imageUrl} imgStyle={imgStyle} />
      <h4 className="book-title">{title}</h4>
      <span className="book-author">{author}</span>
    </div>
  );
}

BookInfo.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string
};

export default BookInfo;
