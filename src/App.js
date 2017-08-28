import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends Component {
  state = {
    books: []
  }
  //Recover all books
  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  //Execute update the book and retrieve all the books in order to re-render the component with the data
  mooveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((resBooks) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onMooveShelf={this.mooveShelf}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            onMooveShelf={this.mooveShelf}
          />
        )}/>
      </div>
    )
  }
}

export default App
