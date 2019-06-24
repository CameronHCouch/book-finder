import React from 'react';
import { mount, shallow } from 'enzyme';
import { googleBooksAPIUtil } from '../util/google_books_api_util';
import FilterableBookTable from './FilterableBookTable';
import SearchForm from './SearchForm';

describe('SearchForm', () => {

  it('renders without crashing', () => {
    let wrapper = shallow(<SearchForm />);
    expect(wrapper.exists()).toBe(true);
  });

  // this test needs to be updated to check whether FilterableBookTable's state changes
  it('updates SearchForm\'s "query" state when user types text in input', () => {
    let wrapper = mount(<FilterableBookTable />);

    expect(wrapper.state('query')).toEqual('');
    // something about how this is simulating change is setting a new undefined key in FilterableBookTable's state. blech.
    wrapper.find('#bookSearch').simulate('change', {
      target: { value: 'Cloud Atlas'}
    });
    expect(wrapper.state('query')).toEqual('Cloud Atlas');
  })

  it('updates FilterableBookTable\'s "books" state when given a valid search query', () => {

  })

  it('given an empty search query, it does not update FilterableBookTable\'s "books" state', () => {

  })
})