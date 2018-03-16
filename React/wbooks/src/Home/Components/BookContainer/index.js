import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookInfo from './Components/BookInfo';

function BookContainer({ searchText, filterOption, books }) {
  return (
    <div className="book-container">
      {books
        .filter(
          book =>
            !book[filterOption.toLowerCase()] || book[filterOption.toLowerCase()].indexOf(searchText) !== -1
        )
        .map(book => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <BookInfo imageUrl={book.imageUrl} title={book.title} author={book.author} />
          </Link>
        ))}
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

BookContainer.propTypes = {
  searchText: PropTypes.string,
  filterOption: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.shape(BookPropType))
};

export default BookContainer;
