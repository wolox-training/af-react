import React from 'react';
import {BOOKS, FILTERS} from './books_json.js';
import './application.css';

class BookInfo extends React.Component {
  render() {
    const author = this.props.author;
    const title = this.props.title;
    const image_url = this.props.image_url;
    
    const book_cover = (image_url != null)?
      (<img className="book-img" src={image_url}/>) :
      (<div className="book-img book-default-backgroud">
        <img src={require('./assets/default_book.svg')}/>
      </div>);

    return(
      <div className="book-info">
        {book_cover}
        <h4 className="book-title">{title}</h4>
        <span className="book-author">{author}</span>
      </div>  
    );         
  }
}

class BookContainer extends React.Component {
  render() {
    const elements = [];
    const searchText = this.props.searchText;
    const filterOption = this.props.filterOption;
    this.props.books.forEach((book) => {
      if (book[filterOption.toLowerCase()] != null && book[filterOption.toLowerCase()].indexOf(searchText) === -1) {
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
}

class BookFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterOptionChange = this.handleFilterOptionChange.bind(this);
  }

  handleFilterOptionChange(e) {
    this.props.onFilterOptionChange(e.target.value);
  }

  render() {
    const filters = [];
    filters.push(
      <option 
          key="Placeholder" 
          value="placeholder"
          defaultValue="selected">
            Seleccionar filtro:
        </option>
    );
    this.props.filters.forEach((filter) => {
      filters.push(
        <option 
          key={filter} 
          value={filter.toLowerCase()}>
            {filter}
        </option>
      );
    });
    return(
      <select 
        className="book-input"
        onChange={this.handleFilterOptionChange}>
        {filters}
      </select>
    );
  }
}

class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  render() {    
    const searchText = this.props.searchText;
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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      filterOption: "placeholder"
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleFilterOptionChange = this.handleFilterOptionChange.bind(this);
  }

  handleSearchTextChange(searchText) {
    this.setState({
      searchText:searchText
    });
  }

  handleFilterOptionChange(filterOption) {
    this.setState({
      filterOption:filterOption
    });
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
