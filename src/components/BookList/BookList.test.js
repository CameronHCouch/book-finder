import React from 'react';
import { shallow, mount } from 'enzyme';
import BookList from './BookList';

const BOOKS = [{
    authors: ['Cameron Couch', '8th Light Team'],
    title: 'The Find-A-Book Story: How my API-Call App Made Me Millions', 
    publisher: 'Self-Published', 
    thumbnail: 'https://user-images.githubusercontent.com/43548466/52541183-22795c80-2d60-11e9-9f7b-2d08c1d79882.jpg', 
    infoLink: 'https://www.cameroncouch.me'}
  ];

  const MORE_BOOKS = [{
    authors: ['Cameron Couch', '8th Light Team'],
    title: 'The Find-A-Book Story: How my API-Call App Made Me Millions', 
    publisher: 'Self-Published', 
    thumbnail: 'https://user-images.githubusercontent.com/43548466/52541183-22795c80-2d60-11e9-9f7b-2d08c1d79882.jpg', 
    infoLink: 'https://www.cameroncouch.me'},
    { 
      authors: ['Cameron Hailey Couch', '8th Light Team'],
      title: 'How Jest and Enzyme Changed My Life', 
      publisher: 'Google Books', 
      thumbnail: 'https://user-images.githubusercontent.com/43548466/52541183-22795c80-2d60-11e9-9f7b-2d08c1d79882.jpg', 
      infoLink: 'https://www.cameroncouch.me'
    },
    { 
      authors: ['Cameron H Couch'],
      title: 'OOP There it Is: Object-Oriented Programming and You', 
      publisher: 'Glamazon', 
      thumbnail: 'https://user-images.githubusercontent.com/43548466/52541183-22795c80-2d60-11e9-9f7b-2d08c1d79882.jpg', 
      infoLink: 'https://www.cameroncouch.me'
    }
  ];

describe('BookList', () => {
  it('shallow renders without crashing', () => {
    shallow(<BookList books= { BOOKS }/>);
  })

  it('renders without crashing', () => {
    mount(<BookList books= { BOOKS } />);
  });

  it('renders with the appropriate number of BookListItem children', () => {
    let wrapper = mount(<BookList books= { BOOKS } />);
    expect(wrapper.find('.BookList-outer').children()).toHaveLength(1);
    wrapper = mount(<BookList books= { MORE_BOOKS } />);
    expect(wrapper.find('.BookList-outer').children()).toHaveLength(3);
  })
});