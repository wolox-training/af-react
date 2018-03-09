import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BOOKS, FILTERS } from './books_json';
import './application.css';
import * as defaultImg from './assets/default_book.svg';

function BookCover({ imageUrl }) {
  return imageUrl != null ? (
    <img className="book-img" alt="Book cover" src={imageUrl} />
  ) : (
    <div className="book-img book-default-backgroud">
      <img alt="Default book cover" src={defaultImg} />
    </div>
  );
}

BookCover.propTypes = {
  imageUrl: PropTypes.string
};

function BookInfo({ author, title, imageUrl }) {
  return (
    <div className="book-info">
      <BookCover imageUrl={imageUrl} />
      <h4 className="book-title">{title}</h4>
      <span className="book-author">{author}</span>
    </div>
  );
}

BookInfo.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string
};

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
  year: PropTypes.number,
  image_url: PropTypes.string
};

BookContainer.propTypes = {
  searchText: PropTypes.string,
  filterOption: PropTypes.string,
  books: PropTypes.shape(BookPropType)
};

class BookFilter extends Component {
  handleFilterOptionChange = e => this.props.onFilterOptionChange(e.target.value);

  render() {
    const { filters } = this.props;
    const renderedFilters = filters.map(filter => (
      <option key={filter} value={filter.toLowerCase()}>
        {filter}
      </option>
    ));

    return (
      <select className="book-input" onChange={this.handleFilterOptionChange}>
        <option key="Placeholder" value="placeholder" defaultValue="selected">
          Seleccionar filtro:
        </option>
        {renderedFilters}
      </select>
    );
  }
}
BookFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onFilterOptionChange: PropTypes.func
};

class BookSearch extends Component {
  handleSearchTextChange = e => this.props.onSearchTextChange(e.target.value);

  render() {
    const { searchText } = this.props;
    return (
      <input
        className="book-input book-search"
        type="text"
        placeholder="Buscar..."
        value={searchText}
        onChange={this.handleSearchTextChange}
      />
    );
  }
}

class Home extends Component {
  state = { searchText: '', filterOption: 'placeholder' };

  handleSearchTextChange = searchText => {
    this.setState({ searchText });
  };

  handleFilterOptionChange = filterOption => {
    this.setState({ filterOption });
  };

  render() {
    return (
      <div>
        <BookFilter
          filters={FILTERS}
          filterOption={this.state.filterOption}
          onFilterOptionChange={this.handleFilterOptionChange}
        />
        <BookSearch searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
        <BookContainer
          books={BOOKS}
          searchText={this.state.searchText}
          filterOption={this.state.filterOption}
        />
      </div>
    );
  }
}

export default Home;
