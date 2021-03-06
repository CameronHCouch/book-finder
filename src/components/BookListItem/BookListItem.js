import React from 'react';
import '../BookList/BookList.css';

function BookListItem(props) {
  function spreadAuthors(){
    if (Array.isArray(props.authors) && props.authors.length > 1) {
      return props.authors.join(', ');
    } else {
      return props.authors;
    }
  }

    return (
      <div className='BookListItem'>
        <ul className='BookListItem-list'>
          <li><a href={ props.infoLink } target='_blank' rel='noopener noreferrer'> { props.title }</a></li>
          <li><span>{props.authors.length > 1 ? 'Authors' : 'Author'}:</span> { spreadAuthors() }</li>
          <li><span>Publisher:</span> { props.publisher }</li>
          <li><a href={ props.infoLink } target='_blank' rel='noopener noreferrer'><img src={ props.thumbnail } alt={`Book cover for ${props.title}`} /></a></li>
        </ul>
      </div>
    );
}

export default BookListItem;