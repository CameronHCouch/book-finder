import React, { Component } from 'react';
import { googleBooksAPIUtil } from '../util/google_books_api_util';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.query) {
      this.setState( { books: [] });
      googleBooksAPIUtil(this.state.query).then(res => console.log(res))
      this.setState({ books: googleBooksAPIUtil(this.state.query) });
    }
    // else raise error
  }

  render() {
    return (
      <div className="SearchForm-wrapper">
        <form onSubmit= { this.handleSubmit }>
          <label htmlFor="book-search">Type your book search here:</label>
          <input type="text" value={ this.state.query } onChange= { this.handleChange } name="book-search" id="book-search"></input>
          <input type="submit" value="Search" id="submit"></input>
        </form>
      </div>
    );
  }
}

export default SearchForm;