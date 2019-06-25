import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('successfully renders shallowly', () => {
    shallow(<App />);
  })
  
  it('renders without crashing', () => {
    mount(<App />);
  });
})

