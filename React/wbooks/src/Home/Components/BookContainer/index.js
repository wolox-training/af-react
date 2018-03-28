import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ActionCreators from '../../../redux/books/actions';

import BookInfo from './Components/BookInfo';

class BookContainer extends Component {
  componentDidMount() {
    this.props.dispatch(ActionCreators.books());
  }

  render() {
    const { searchText, filterOption } = this.props;
    const books = this.props.books ? this.props.books : [];
    return (
      <div className="book-container">
        {books
          .filter(
            book =>
              !book[filterOption.toLowerCase()] || book[filterOption.toLowerCase()].indexOf(searchText) !== -1
          )
          .map(book => (
            <Link to={`/book/${book.id}`} key={book.id}>
              <BookInfo imageUrl={book.image_url} title={book.title} author={book.author} />
            </Link>
          ))}
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

BookContainer.propTypes = {
  searchText: PropTypes.string,
  filterOption: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.shape(BookPropType))
};

const mapStateToProps = state => ({
  books: state.books.books,
  loading: state.books.loadingBooks,
  error: state.books.errorBooks
});

export default connect(mapStateToProps)(BookContainer);
