import React from 'react';
import { mount, shallow } from 'enzyme';
import { googleBooksAPIUtil } from '../util/google_books_api_util';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  // shallow mount the SearchForm before each test
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchForm />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('updates SearchForm\'s "query" state when user types text in input', () => {
    expect(wrapper.state().query).toEqual('');

    wrapper.find('#bookSearch').simulate('change', {
      target: { value: 'Cloud Atlas'}
    });

    expect(wrapper.state().query).toEqual('Cloud Atlas');
  })

  it('updates SearchForm\'s "books" state when given a valid search query', () => {

  })

  it('given an empty search query, it does not update SearchForm\'s "books" state', () => {

  })
})