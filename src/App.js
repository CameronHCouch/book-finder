import React, { Component } from 'react';
import SearchForm from './components/SearchForm'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Find-A-Book, the best app for discovering books on the web!
          </p>
        </header>
        <SearchForm />
      </div>
    );
  }
}

export default App;
