import React from 'react';
import {BOOKS, FILTERS} from './books_json.js';
import './application.css';

class BookInfo extends React.Component {
  render() {
    const author = this.props.author;
    const title = this.props.title;
    const image_url = this.props.image_url;
    const genre = this.props.genre;
    const publisher = this.props.publisher;
    const year = this.props.year;
    
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
    this.props.books.forEach((book) => {
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
  render() {
    const filters = [];
    filters.push(
      <option 
          key="Placeholder" 
          value="placeholder"
          selected="selected">
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
      <select className="book-input">
        {filters}
      </select>
    );
  }
}

class BookSearch extends React.Component {
  render() {    
    return(
      <input className="book-input" type="text" placeholder="Buscar..."/>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div>   
        <BookFilter 
          filters={FILTERS}/>  
        <BookSearch/>   
        <BookContainer 
          books={BOOKS}/>
      </div>
    )
  }
}


export default App
