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
    // current issue: the search is not immediately updating when new text is added
    this.props.onSubmit(e)
  }

  toggleFamilyFriendly() {
    this.props.toggleFamilyFriendly();
  }

  render() {
    return (
      <div className="SearchForm-wrapper">
        <form onSubmit= { this.handleSubmit }>
          <label htmlFor="query" className="formHeader">Search for books below:</label>
          <input 
            type="text" 
            value={ this.props.query } 
            onChange= { this.handleChange } 
            name="query" 
            id="bookSearch" 
            placeholder="Ex. 'Harry Potter' or 'Douglas Adams'">
          </input>
          <div className="formOptions">
            <label htmlFor="maxResults">
              Max Num Results
              <select name="maxResults" onChange = { this.handleChange }>
                <option value="10" defaultValue>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
              </select>
            </label>
            <label htmlFor="familyFriendly">
              Allow mature results?
              <input 
                type="checkbox" 
                onChange= { this.toggleFamilyFriendly } 
                name="familyFriendly" 
                id="familyFriendly">
              </input>
            </label>
          </div>
          <input type="submit" value="Search" id="submit"></input>
        </form>
      </div>
    );
  }
}

export default SearchForm;