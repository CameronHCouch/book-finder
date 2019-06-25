import React from 'react';
import { shallow } from 'enzyme';
import BookListItem from './BookListItem';

const BOOK = {
  authors: ['Cameron Couch', '8th Light Team'],
  title: 'The Find-A-Book Story: How my API-Call App Made Me Millions', 
  publisher: 'Self-Published', 
  thumbnail: 'https://user-images.githubusercontent.com/43548466/52541183-22795c80-2d60-11e9-9f7b-2d08c1d79882.jpg', 
  infoLink: 'https://www.cameroncouch.me'
};

describe('BookListItem', () => {
  it('shallow renders without crashing', () => {
    shallow(<BookListItem 
      title= { BOOK.title }
      authors= { BOOK.authors }
      publisher= { BOOK.publisher }
      thumbnail= { BOOK.thumbnail }
      infoLink= { BOOK.infoLink } 
      />);
  });
})
