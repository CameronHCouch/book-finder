import React from 'react';
import { mount, shallow } from 'enzyme';
import FilterableBookTable from './FilterableBookTable';
import mockGoogleBooksAPIUtil from '../util/googleBooksAPIUtil';

console.log(mockGoogleBooksAPIUtil);

describe('FilterableBookTable', () => {
  it('shallow renders without crashing', () => {
    let wrapper = shallow(<FilterableBookTable />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders without crashing', () => {
    mount(<FilterableBookTable />);
  })

  it('"query" state updates when text is typed into SearchForm\'s text input', () => {
    let wrapper = mount(<FilterableBookTable />);

    expect(wrapper.state('query')).toEqual('');
    // something about how this is simulating change is setting a new undefined key in FilterableBookTable's state. blech.
    wrapper.find('#bookSearch').at(0).simulate('change',
      {target: { value: 'Cloud Atlas'}
    });
    console.log(wrapper.state())
    expect(wrapper.state('query')).toBe('Cloud Atlas');
  })

  it('updates "books" state when a valid search query is submitted', () => {
    let wrapper = mount(<FilterableBookTable />);

    wrapper.setState({query: 'Harry Potter'});
    wrapper.instance().handleSubmit.bind(wrapper);
    console.log(wrapper.state())
    expect(wrapper.state('books').length).toEqual(2)
  })

  it('given an empty search query, it does not call the external API', () => {
    let wrapper = mount(<FilterableBookTable />);
    wrapper.instance().handleSubmit.bind(wrapper);
    expect(wrapper.state('books'.length)).toEqual(0);
  })
})