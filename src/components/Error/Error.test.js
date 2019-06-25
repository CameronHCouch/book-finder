import React from 'react';
import { shallow, mount } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  it('successfully renders shallowly', () => {
    shallow(<Error />);
  })
  
  it('renders without crashing', () => {
    mount(<Error />);
  });
})

