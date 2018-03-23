import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { bookActions } from '../redux/books/actions';

import Home from './layout';

class HomeContainer extends Component {
  state = { searchText: '', filterOption: 'placeholder' };

  componentWillMount() {
    this.props.dispatch(bookActions.books());
  }

  handleSearchTextChange = searchText => {
    this.setState({ searchText });
  };

  handleFilterOptionChange = filterOption => {
    this.setState({ filterOption });
  };

  render() {
    const books = this.props.items && this.props.items.data ? this.props.items.data : [];
    console.log(books);
    return (
      <Home
        books={books}
        searchText={this.state.searchText}
        filterOption={this.state.filterOption}
        handleFilterOptionChange={this.handleFilterOptionChange}
        handleSearchTextChange={this.handleSearchTextChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.books.items,
  loading: state.books.loading,
  error: state.books.error
});

export default withRouter(connect(mapStateToProps)(HomeContainer));
