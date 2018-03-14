import React from 'react';
import PropTypes from 'prop-types';

import '../../../application.css';

import BookInfo from './Components/BookInfo';

function BookContainer({ searchText, filterOption, books }) {
  const elements = [];
  books.forEach(book => {
    if (book[filterOption.toLowerCase()] && book[filterOption.toLowerCase()].indexOf(searchText) === -1) {
      return;
    }
    elements.push(
      <BookInfo key={book.id} imageUrl={book.imageUrl} title={book.title} author={book.author} />
    );
  });
  return <div className="book-container">{elements}</div>;
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

BookContainer.propTypes = {
  searchText: PropTypes.string,
  filterOption: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.shape(BookPropType))
};

export default BookContainer;
