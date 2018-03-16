import React from 'react';
import { Link } from 'react-router-dom';

import { BOOKS } from '../books_json';

import BookDetailInfo from './Components/BookDetailInfo';
import BookSuggestions from './Components/BookSuggestions';
import CommentSection from './Components/CommentSection';

function BookDetail({ match }) {
  const bookId = match.params.id;
  const book = BOOKS.find(b => b.id == bookId);
  const suggestions = BOOKS.filter(b => b.genre == book.genre);

  return (
    <div>
      <div className="body-container">
        <Link to="/" className="back-button">
          &lt; Volver
        </Link>
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
        <CommentSection />
      </div>
    </div>
  );
}

export default BookDetail;
