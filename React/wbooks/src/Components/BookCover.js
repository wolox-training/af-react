import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from '../assets/default_book.svg';

function BookCover({ imageUrl, imgStyle, defaultStyle }) {
  return imageUrl ? (
    <img className={imgStyle} alt="Book cover" src={imageUrl} />
  ) : (
    <div className={`${imgStyle} book-default-background`}>
      <img className={defaultStyle} alt="Default book cover" src={defaultImg} />
    </div>
  );
}

BookCover.propTypes = {
  imageUrl: PropTypes.string,
  imgStyle: PropTypes.string,
  defaultStyle: PropTypes.string
};

export default BookCover;
