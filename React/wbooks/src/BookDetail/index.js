import React, { Component, Fragment } from 'react';
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
            <Fragment>
              <BookDetailInfo
                imageUrl={book.image_url}
                title={book.title}
                author={book.author}
                year={book.year}
                genre={book.genre}
              />
              <hr />
              <BookSuggestions suggestions={BOOKS.filter(b => b.genre === book.genre)} />
            </Fragment>
          )}
          <hr />
          <CommentSection />
        </div>
      </div>
    );
  }
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

BookDetail.propTypes = {
  items: PropTypes.shape(BookPropType)
};

const mapStateToProps = state => ({
  items: state.books.bookDetail,
  loading: state.books.loadingDetail,
  error: state.books.errorDetail
});

export default connect(mapStateToProps)(BookDetail);
