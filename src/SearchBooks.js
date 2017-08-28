import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class SearchBooks extends Component {
  static propTypes = {
    onMooveShelf: PropTypes.func.isRequired
  }
  state = {
    query: '',
    resultSearchBooks: []
  }
  searchQuery = inputQuery => {
    let query = inputQuery.trim()
    if (query) {
      BooksAPI.search(query, 20).then(resultSearchBooks => {
        if (resultSearchBooks.error) {
          this.setState({ resultSearchBooks: [] })
        }else {
          this.setState({ resultSearchBooks })
        }
      })
      this.setState({ query })
    }else {
      this.setState({ query: '', resultSearchBooks: [] })
    }
  }

  render() {
    const { query, resultSearchBooks } = this.state
    const { onMooveShelf } = this.props

    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"
              value={query}
              onChange={event => this.searchQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
          {resultSearchBooks.length !== 0 && (
            <div className="list-books-content">
              <div className="bookshelf">
                <BookShelf bookshelf={resultSearchBooks} onMooveShelf={onMooveShelf} />
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default SearchBooks
