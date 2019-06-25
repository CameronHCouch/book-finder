import React from 'react';
import { mount, shallow } from 'enzyme';
import FilterableBookTable from './FilterableBookTable';

jest.mock('../../util/googleBooksAPIUtil.js');

describe('FilterableBookTable', () => {
  it('shallow renders without crashing', () => {
    let wrapper = shallow(<FilterableBookTable />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders without crashing', () => {
    mount(<FilterableBookTable />);
  })

  it('updates "books" state when a valid search query is submitted', async() => {
    let wrapper = mount(<FilterableBookTable />);
    wrapper.setState({query: 'Harry Potter'});
    await wrapper.instance().handleSubmit({preventDefault: () => {}});
    expect(wrapper.state('books').length).toEqual(2)
  })

  it('given an empty search query, it updates component\'s error state instead of calling API', () => {
    let wrapper = mount(<FilterableBookTable />);
    expect(wrapper.state('error')).toBe('');
    wrapper.instance().handleSubmit({preventDefault: () => {}});
    expect(wrapper.state('error')).toBe('📚 Your search must be at least one character long 📚');
    expect(wrapper.state('books').length).toEqual(0);
  })
})