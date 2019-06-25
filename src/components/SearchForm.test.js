import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {

  it('renders without crashing', () => {
    let wrapper = shallow(<SearchForm />);
    expect(wrapper.exists()).toBe(true);
  });
})