import React, { Component } from 'react';
import { googleBooksAPIUtil } from '../../util/googleBooksAPIUtil';
import BookList from '../BookList/BookList';
import SearchForm from '../SearchForm/SearchForm';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
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
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.processAPIResult = this.processAPIResult.bind(this);
    this.toggleFamilyFriendly = this.toggleFamilyFriendly.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.query) {
      this.setState( { books: [], loading: true, error: false });
      googleBooksAPIUtil(this.state.query, this.state.maxResults, this.state.familyFriendly)
        .then(result => {
          this.processAPIResult(result);
        });
    } else {
      this.setState({ error: '📚 Your search must be at least one character long 📚' });
    }
  }

  processAPIResult(result) {
    const errorRegex = new RegExp('[45]..');
    this.setState( { loading: false });

    if (result && !errorRegex.test(result)) {
      this.setState({ books: result });
    } else if (result && errorRegex.test(result)) {
      this.setState({ error: 'The server could not be reached! 😲' });
    } else {
      this.setState({ error: 'No results found for this search 😞' });
    }
  }

  toggleFamilyFriendly() {
    this.setState({ familyFriendly: !this.state.familyFriendly });
  }

  renderLoading() {
    if (this.state.loading === true) {
      return <Loading />
    }
  }

  renderError() {
    if (this.state.error) {
      return <Error errorMessage= { this.state.error } />
    }
  }

  render() {
    return (
      <div className='FilterableBookTable'>
        <SearchForm
          query= { this.state.query }
          maxResults= { this.state.maxResults }
          familyFriendly= { this.state.familyFriendly }
          onChange={ this.handleChange }
          onSubmit={ this.handleSubmit }
          toggleFamilyFriendly={ this.toggleFamilyFriendly } 
          />
        { this.renderLoading() }
        { this.renderError() }
        <BookList books = { this.state.books } />
      </div>
    );
  }
}

export default FilterableBookTable;