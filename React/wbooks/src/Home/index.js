import React, { Component } from 'react';

import '../application.css';
import HomeLayout from './layout';

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
      <HomeLayout
        searchText={this.state.searchText}
        filterOption={this.state.filterOption}
        handleFilterOptionChange={this.handleFilterOptionChange}
        handleSearchTextChange={this.handleSearchTextChange}
      />
    );
  }
}

export default Home;
