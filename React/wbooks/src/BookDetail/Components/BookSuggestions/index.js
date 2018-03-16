import React from 'react';
import PropTypes from 'prop-types';

import BookCover from '../../../Components/BookCover';

function BookSuggestions({ suggestions }) {
  return (
    <div>
      <h3 className="green-title">Sugerencias</h3>
      <div className="suggestion-container">
        {suggestions.map(suggestion => (
          <BookCover key={suggestion.id} imageUrl={suggestion.imageUrl} imgStyle="suggestion-img" />
        ))}
      </div>
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
  suggestions: PropTypes.arrayOf(PropTypes.shape(BookPropType).isRequired).isRequired
};

export default BookSuggestions;
