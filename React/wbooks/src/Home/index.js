import React, { Component } from 'react';

import Home from './layout';

class HomeContainer extends Component {
  state = { searchText: '', filterOption: 'placeholder' };

  handleSearchTextChange = searchText => {
    this.setState({ searchText });
  };

  handleFilterOptionChange = filterOption => {
    this.setState({ filterOption });
  };

  render() {
    return (
      <Home
        searchText={this.state.searchText}
        filterOption={this.state.filterOption}
        handleFilterOptionChange={this.handleFilterOptionChange}
        handleSearchTextChange={this.handleSearchTextChange}
      />
    );
  }
}

export default HomeContainer;
