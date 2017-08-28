import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

class BookShelf extends Component {
  static propTypes = {
    bookshelf: PropTypes.array.isRequired,
    onMooveShelf: PropTypes.func.isRequired
  }
  render() {
    const { bookshelf, onMooveShelf } = this.props
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookshelf.map(book => (
            <BookItem key={book.id} bookId={book.id} onMooveShelf={onMooveShelf} />
          ))}
        </ol>
      </div>
    )
  }
}

export default BookShelf
