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
      <h3 className="green-title">Sugerencias</h3>
      <div className="suggestion-container">{books}</div>
    </div>
  );
}

const BookPropType = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image_url: PropTypes.string
};

BookSuggestions.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.shape(BookPropType).isRequired)
};

export default BookSuggestions;
