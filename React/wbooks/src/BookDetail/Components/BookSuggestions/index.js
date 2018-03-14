import React from 'react';
import PropTypes from 'prop-types';

import BookCover from '../../../Components/BookCover';

function BookSuggestions({ suggestions }) {
  const books = [];
  const imgStyle = 'suggestion-img';
  suggestions.forEach(b => {
    books.push(<BookCover key={b.id} imageUrl={b.imageUrl} imgStyle={imgStyle} />);
  });
  return (
    <div>
      <h3 className="suggestion-title">Sugerencias</h3>
      <div className="suggestion-container">{books}</div>
    </div>
  );
}

const BookPropType = {
  id: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
  publisher: PropTypes.string,
  year: PropTypes.string,
  image_url: PropTypes.string
};

BookSuggestions.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.shape(BookPropType))
};

export default BookSuggestions;
