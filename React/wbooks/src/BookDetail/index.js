import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { BOOKS } from '../books_json';
import ActionCreators from '../redux/books/actions';

import BookDetailInfo from './Components/BookDetailInfo';
import BookSuggestions from './Components/BookSuggestions';
import CommentSection from './Components/CommentSection';

class BookDetail extends Component {
  componentDidMount() {
    this.props.dispatch(ActionCreators.bookDetail(this.props.match.params.id));
  }
  render() {
    const book = this.props.items ? this.props.items : null;

    return (
      <div>
        <div className="body-container">
          <Link to="/" className="back-button">
            &lt; Volver
          </Link>
          {book && (
            <div>
              <BookDetailInfo
                imageUrl={book.image_url}
                title={book.title}
                author={book.author}
                year={book.year}
                genre={book.genre}
              />
              <hr />
              <BookSuggestions suggestions={BOOKS.filter(b => b.genre === book.genre)} />
            </div>
          )}
          <hr />
          <CommentSection />
        </div>
      </div>
    );
  }
}

BookDetail.propTypes = {
  items: PropTypes.arrayOf
};

const mapStateToProps = state => ({
  items: state.books.bookDetail,
  loading: state.books.loadingDetail,
  error: state.books.errorDetail
});

export default connect(mapStateToProps)(BookDetail);
