import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookItem extends Component {
  static propTypes = {
    bookId: PropTypes.string.isRequired,
    onMooveShelf: PropTypes.func.isRequired
  }
  state = {
    bookData: []
  }
  componentDidMount(){
    BooksAPI.get(this.props.bookId).then(bookData => {
      this.setState({ bookData })
    })
  }
  render() {
    const { onMooveShelf } = this.props
    const { bookData } = this.state
    return (
      <li>
        <div className="book">
          <div className="book-top">
            {bookData.imageLinks && (
              <div className="book-cover" style={{ backgroundImage: `url(${bookData.imageLinks.thumbnail})` }}></div>
            )}
            <div className="book-shelf-changer ">
              <select onChange={event => onMooveShelf(bookData, event.target.value)} value={bookData.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookData.title}</div>
          <div className="book-authors">
            {bookData.authors ? bookData.authors.join(', ') : bookData.publisher}
          </div>
        </div>
      </li>
    )
  }
}

export default BookItem
