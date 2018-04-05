import React from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../../../../Context/ThemeProvider';
import BookCover from '../../../../../Components/BookCover';

import './style.css';

function BookInfo({ author, title, imageUrl }) {
  return (
    <ThemeContext.Consumer>
      {context => (
        <div className={`book-info theme-${context.state.theme}`}>
          <BookCover imageUrl={imageUrl} imgStyle={`book-image theme-${context.state.theme}`} title={title} />
          <h4 className={`book-title theme-${context.state.theme}`}>{title}</h4>
          <span className="book-author">{author}</span>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

BookInfo.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default BookInfo;
