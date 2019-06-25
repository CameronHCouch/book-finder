import React from 'react';
import { shallow, mount } from 'enzyme';
import Loading from './Loading';

describe('Loading', () => {
  it('successfully renders shallowly', () => {
    shallow(<Loading />);
  })
  
  it('renders without crashing', () => {
    mount(<Loading />);
  });
})

