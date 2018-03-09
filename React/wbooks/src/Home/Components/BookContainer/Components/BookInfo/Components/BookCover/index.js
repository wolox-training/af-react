import React from 'react';
import PropTypes from 'prop-types';

import '../../../../../../../application.css';
import * as defaultImg from '../../../../../../../assets/default_book.svg';

function BookCover({ imageUrl }) {
  return imageUrl != null ? (
    <img className="book-img" alt="Book cover" src={imageUrl} />
  ) : (
    <div className="book-img book-default-backgroud">
      <img alt="Default book cover" src={defaultImg} />
    </div>
  );
}

BookCover.propTypes = {
  imageUrl: PropTypes.string
};

export default BookCover;
