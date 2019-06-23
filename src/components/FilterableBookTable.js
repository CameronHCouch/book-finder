import React, { Component } from 'react';
import { googleBooksAPIUtil } from '../util/google_books_api_util';
import BookList from './BookList';
import SearchForm from './SearchForm';
import './FilterableBookTable.css';

class FilterableBookTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      maxResults: 10,
      familyFriendly: true,
      books: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFamilyFriendly = this.toggleFamilyFriendly.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // current issue: the search is not immediately updating when new text is added
    if (this.state.query) {
      this.setState( { books: [] });
      googleBooksAPIUtil(this.state.query, this.state.maxResults, this.state.familyFriendly)
        .then(result => {
          console.log(result);
          this.setState({ books: result })
        })
      this.setState( { query: "" });
    }
    // else raise error
  }

  toggleFamilyFriendly() {
    this.setState({ familyFriendly: !this.state.familyFriendly });
  }

  render() {
    return (
      <div className="FilterableBookTable">
        <SearchForm
          query= { this.state.query }
          maxResults= { this.state.maxResults }
          familyFriendly= { this.state.familyFriendly }
          onChange={ this.handleChange }
          onSubmit={ this.handleSubmit }
          toggleFamilyFriendly={ this.toggleFamilyFriendly } 
          />
        <BookList />
      </div>
    );
  }
}

export default FilterableBookTable;