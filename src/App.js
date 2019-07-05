import React from 'react';
import FilterableBookTable from './components/FilterableBookTable/FilterableBookTable';
import './App.css';

const bookImage = process.env.PUBLIC_URL + '/books.png';

function App() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='App-logo'>
            <img src={bookImage} alt='Stack of books' />
            <img src={bookImage} alt='Stack of books' />
            <img src={bookImage} alt='Stack of books' />
          </div>
          <p>Find-A-Book: the best site for discovering books!</p>
        </header>
        <FilterableBookTable />
      </div>
    );
}

export default App;
