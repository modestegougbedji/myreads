import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onMooveShelf: PropTypes.func.isRequired
  }

  render() {
  const { books, onMooveShelf } = this.props
  //Filter books by category
  const booksCurrentlyReading = books.filter( book => (book.shelf === 'currentlyReading') )
  const booksWantToRead = books.filter( book => (book.shelf === 'wantToRead') )
  const booksRead = books.filter( book => (book.shelf === 'read') )

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <BookShelf bookshelf={booksCurrentlyReading} onMooveShelf={onMooveShelf} />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <BookShelf bookshelf={booksWantToRead} onMooveShelf={onMooveShelf} />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <BookShelf bookshelf={booksRead} onMooveShelf={onMooveShelf} />
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks
