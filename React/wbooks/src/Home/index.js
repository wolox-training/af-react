import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { allBooksAction } from '../redux/allBooks/actions';

import Home from './layout';

class HomeContainer extends Component {
  state = { searchText: '', filterOption: 'placeholder' };

  componentWillMount() {
    this.props.dispatch(allBooksAction.books());
  }

  handleSearchTextChange = searchText => {
    this.setState({ searchText });
  };

  handleFilterOptionChange = filterOption => {
    this.setState({ filterOption });
  };

  render() {
    const books = this.props.items && this.props.items.data instanceof Array ? this.props.items.data : [];
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
  items: state.allBooks.books,
  loading: state.allBooks.loading,
  error: state.allBooks.error
});

export default withRouter(connect(mapStateToProps)(HomeContainer));
