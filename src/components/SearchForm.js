import React, { Component } from 'react';
import { googleBooksAPIUtil } from '../util/google_books_api_util';
import './SearchForm.css';

class SearchForm extends Component {
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
      <div className="SearchForm-wrapper">
        <form onSubmit= { this.handleSubmit }>
          <label htmlFor="query">Type your book search here:</label>
          <input type="text" value={ this.state.query } onChange= { this.handleChange } name="query" id="book-search"></input>
          <label htmlFor="maxResults">Max Num Results</label>
          <select name="maxResults" onChange = { this.handleChange }>
            <option value="10" defaultValue>10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
          </select>
          <label htmlFor="familyFriendly">Allow mature results?</label>
          <input type="checkbox" onChange= { this.toggleFamilyFriendly } name="familyFriendly" id="familyFriendly"></input>
          <input type="submit" value="Search" id="submit"></input>
        </form>
      </div>
    );
  }
}

export default SearchForm;