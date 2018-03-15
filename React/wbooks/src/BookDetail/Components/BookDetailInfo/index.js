import React from 'react';
import PropTypes from 'prop-types';

import BookCover from '../../../Components/BookCover';

function BookDetailInfo({ imageUrl, title, author, year, genre }) {
  const imgStyle = 'book-detail-img';
  return (
    <div className="book-detail-container">
      <BookCover imageUrl={imageUrl} imgStyle={imgStyle} />
      <div className="book-detail-info-container">
        <h3 className="book-detail-title">{title}</h3>
        <span className="book-detail-author">{author}</span>
        <span className="book-detail-year">{year}</span>
        <span className="book-detail-genre">{genre}</span>
        <p className="book-detail-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="book-detail-rent-button">Alquilar</button>
      </div>
    </div>
  );
}

BookDetailInfo.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default BookDetailInfo;
