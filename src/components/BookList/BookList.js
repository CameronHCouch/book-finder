import React from 'react';
import BookListItem from '../BookListItem/BookListItem';
import './BookList.css';

function BookList(props) {

  const bookList = props.books;
  const bookListComponents = bookList.map((book, idx) => {
    return (
      <li key= { idx} className='BookListItem-wrapper'>
        <BookListItem
          title= { book.title }
          authors= { book.authors }
          publisher= { book.publisher }
          thumbnail= { book.thumbnail }
          infoLink= { book.infoLink } 
        />
      </li>
    )}
  )
    
    return (
      <div className='BookList'>
        <ul className='BookList-outer'>
          { bookListComponents }
        </ul>
      </div>
    );
}

export default BookList;