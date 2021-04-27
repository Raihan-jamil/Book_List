import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

class App extends Component {

  state = {
    books: [
      { id: 1, bookName: "1984", writer: "George Orwell" },
      { id: 2, bookName: "The Vinci Code", writer: "Dan Brown" },
      { id: 3, bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
    showBooks: true
  }
  changeWithInputState = (event, index) => {
    const book = {
      ...this.state.books[index]
    }
    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;
    this.setState({ books: books });
  }

  toggleBooks = () => {
    this.setState({ showBooks: !this.state.showBooks });
  }

  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    };

    //const booksState = this.state.books;
    let books = null;
    if (this.state.showBooks) {
      books = this.state.books.map(book => {
        return (
          <Book
            bookName={book.bookName}
            writer={book.writer}
            key={book.id}
            inputName={(event) => this.changeWithInputState(event, index)}
          />
        );
      });
    }
    console.log(books);
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        {books}
      </div>
    );
  }
}

export default App;
