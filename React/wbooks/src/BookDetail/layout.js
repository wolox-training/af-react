import React from 'react';

import { BOOKS } from '../books_json';

import BookDetailInfo from './Components/BookDetailInfo';
import BookSuggestions from './Components/BookSuggestions';
import Comments from './Components/Comments';

function BookDetailLayout(props) {
  const bookId = props.match.params.number;
  const book = BOOKS.find(b => b.id == bookId);
  const suggestions = BOOKS.filter(b => b.genre == book.genre);
  return (
    <div>
      <BookDetailInfo
        imageUrl={book.image_url}
        title={book.title}
        author={book.author}
        year={book.year}
        genre={book.genre}
      />
      <hr />
      <BookSuggestions suggestions={suggestions} />
      <hr />
      <Comments />
    </div>
  );
}

export default BookDetailLayout;
