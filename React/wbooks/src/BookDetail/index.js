import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { BOOKS } from '../books_json';
import { bookDetailAction } from '../redux/bookDetail/actions';

import BookDetailInfo from './Components/BookDetailInfo';
import BookSuggestions from './Components/BookSuggestions';
import CommentSection from './Components/CommentSection';

class BookDetail extends Component {
  componentWillMount() {
    this.props.dispatch(bookDetailAction.bookDetail(this.props.match.params.id));
  }
  render() {
    const bookId = this.props.match.params.id;
    const book = this.props.items && this.props.items.data ? this.props.items.data : null;
    const suggestions = book ? (
      <BookSuggestions suggestions={BOOKS.filter(b => b.genre == book.genre)} />
    ) : null;

    console.log('detail');
    console.log(book);

    const bookComponent = book ? (
      <BookDetailInfo
        imageUrl={book.image_url}
        title={book.title}
        author={book.author}
        year={book.year}
        genre={book.genre}
      />
    ) : null;

    return (
      <div>
        <div className="body-container">
          <Link to="/" className="back-button">
            &lt; Volver
          </Link>
          {bookComponent}
          <hr />
          {suggestions}
          <hr />
          <CommentSection />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  items: state.bookDetail.items,
  loading: state.bookDetail.loading,
  error: state.bookDetail.error
});

export default withRouter(connect(mapStateToProps)(BookDetail));
