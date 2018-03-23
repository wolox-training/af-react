import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from '../assets/default_book.svg';

function BookCover({ imageUrl, imgStyle, defaultStyle, title }) {
  return imageUrl ? (
    <img className={imgStyle} alt={title} src={imageUrl} />
  ) : (
    <div className={`${imgStyle} book-default-background`}>
      <img className={defaultStyle} alt={title} src={defaultImg} />
    </div>
  );
}

BookCover.propTypes = {
  imageUrl: PropTypes.string,
  imgStyle: PropTypes.string.isRequired,
  defaultStyle: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default BookCover;
