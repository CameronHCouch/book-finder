import React from 'react';
import ReactDOM from 'react-dom';
import BookListItem from './BookListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
