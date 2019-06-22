import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BookList from './BookList';

describe('BookList', () => {
  it('successfully renders shallowly', () => {
    shallow(<BookList />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});