import React, { Component } from 'react';
import { googleBooksAPIUtil } from '../util/google_books_api_util';
import BookList from './BookList';
import SearchForm from './SearchForm';
import Loading from './Loading';
import './FilterableBookTable.css';

class FilterableBookTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      maxResults: 10,
      familyFriendly: true,
      loading: false,
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
    if (this.state.query) {
      this.setState( { books: [], loading: true });
      googleBooksAPIUtil(this.state.query, this.state.maxResults, this.state.familyFriendly)
        .then(result => {
          console.log(result);
          this.setState({ books: result, loading: false })
        });
    }
    // else raise error
  }

  toggleFamilyFriendly() {
    this.setState({ familyFriendly: !this.state.familyFriendly });
  }

  renderLoading() {
    if (this.state.loading === true) {
      return <Loading />
    }
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
        { this.renderLoading() }
        <BookList books = { this.state.books } />
      </div>
    );
  }
}

export default FilterableBookTable;