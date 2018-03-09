import React, { Component } from 'react';
import { BOOKS , FILTERS } from './books_json.js';
import './application.css';

function BookCover(props) {
  return (props.image_url != null)?
    (<img className="book-img" src={props.image_url}/>) :
    (<div className="book-img book-default-backgroud">
      <img src={require('./assets/default_book.svg')}/>
    </div>);
}

function BookInfo(props) {
  const { author, title, image_url } = props;  
  return(
    <div className="book-info">
      <BookCover
        image_url={image_url}/>
      <h4 className="book-title">{title}</h4>
      <span className="book-author">{author}</span>
    </div>  
  );         
}

function BookContainer(props) {
  const elements = [];
  const { searchText, filterOption } = props;
  props.books.forEach(book => {
    if (book[filterOption.toLowerCase()] && book[filterOption.toLowerCase()].indexOf(searchText) === -1) {
      return;
    }
    elements.push(
      <BookInfo 
        key={book.id}
        image_url={book.image_url}
        title={book.title}
        author={book.author} />
    );
  }); 
  return(
    <div className="book-container">{elements}</div>
  );   
}

class BookFilter extends Component {
  handleFilterOptionChange = e => this.props.onFilterOptionChange(e.target.value);

  render() {
    const { filters } = this.props;
    const renderedFilters = filters.map(filter => 
      <option 
        key={filter} 
        value={filter.toLowerCase()}>
        {filter}
      </option>
    );

    return (
      <select 
        className="book-input"
        onChange={this.handleFilterOptionChange}>
        <option 
          key="Placeholder" 
          value="placeholder"
          defaultValue="selected">
          Seleccionar filtro:
        </option>
          {renderedFilters}
      </select>
    );
  }
}

class BookSearch extends Component {
  handleSearchTextChange = e => this.props.onSearchTextChange(e.target.value);

  render() {    
    const { searchText } = this.props;
    return(
      <input 
        className="book-input book-search" 
        type="text" 
        placeholder="Buscar..."
        value={searchText}
        onChange={this.handleSearchTextChange}/>
    );
  }
}

class Home extends Component {
  state = { searchText: "", filterOption: "placeholder" }

  handleSearchTextChange = searchText => {
    this.setState({ searchText });
  }

  handleFilterOptionChange = filterOption => {
    this.setState({ filterOption });
  }

  render(){
    return (
      <div>   
        <BookFilter 
          filters={FILTERS}
          filterOption={this.state.filterOption}
          onFilterOptionChange={this.handleFilterOptionChange}/>  
        <BookSearch
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}/>   
        <BookContainer 
          books={BOOKS}
          searchText={this.state.searchText}
          filterOption={this.state.filterOption}/>
      </div>
    )
  }
}

export default Home;
