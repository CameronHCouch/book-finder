import React from 'react';
import FilterableBookTable from './components/FilterableBookTable'
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Find-A-Book, the best app for discovering books on the web!
          </p>
        </header>
        <FilterableBookTable />
      </div>
    );
}

export default App;
