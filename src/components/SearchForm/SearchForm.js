import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFamilyFriendly = this.toggleFamilyFriendly.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e);
  }

  toggleFamilyFriendly() {
    this.props.toggleFamilyFriendly();
  }

  render() {

    const maxResultsDropdown = () => {
      const optionList = [];
      let value = 10;
      while (value <= 40) {
        optionList.push(<option value={value} key={value}>{value}</option>);
        value += 5;
      }
      return (
        <select name='maxResults' onChange = { this.handleChange }>
          { optionList }
        </select>
      );
    }
    return (
      <div className='SearchForm-wrapper'>
        <form onSubmit= { this.handleSubmit } autoComplete='off'>
          <label htmlFor='query' className='formHeader'>Search for books:</label>
          <input 
            type='text' 
            value={ this.props.query } 
            onChange= { this.handleChange } 
            onFocus = { (e) => e.target.placeholder = '' }
            onBlur = { (e) => e.target.placeholder = "Ex. 'Harry Potter' or 'Douglas Adams'" }
            name='query' 
            id='bookSearch' 
            placeholder="Ex. 'Harry Potter' or 'Douglas Adams'">
          </input>
          <div className='formOptions'>
            <label htmlFor='maxResults'>
              Max Num Results
              { maxResultsDropdown() }
            </label>
            <label htmlFor='familyFriendly'>
              Allow mature results?
              <input 
                type='checkbox' 
                onChange= { this.toggleFamilyFriendly } 
                name='familyFriendly' 
                id='familyFriendly'>
              </input>
            </label>
          </div>
          <input type='submit' value='Search' id='submit'></input>
        </form>
      </div>
    );
  }
}

export default SearchForm;