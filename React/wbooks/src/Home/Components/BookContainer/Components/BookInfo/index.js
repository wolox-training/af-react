import React from 'react';
import PropTypes from 'prop-types';

import BookCover from '../../../../../Components/BookCover';
import { withTheme } from '../../../../../HOC/withTheme';

import './style.css';

function BookInfo({ author, title, imageUrl, theme }) {
  return (
    <div className={`book-info theme-${theme}`}>
      <BookCover imageUrl={imageUrl} imgStyle={`book-image theme-${theme}`} title={title} />
      <h4 className={`book-title theme-${theme}`}>{title}</h4>
      <span className="book-author">{author}</span>
    </div>
  );
}

BookInfo.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  theme: PropTypes.string.isRequired
};

export default withTheme(BookInfo);
