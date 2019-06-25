import React from 'react';
import { shallow, mount } from 'enzyme';
import FilterableBookTable from '../FilterableBookTable/FilterableBookTable';
import SearchForm from './SearchForm';

describe('SearchForm', () => {

  it('renders without crashing', () => {
    let wrapper = shallow(<SearchForm />);
    expect(wrapper.exists()).toBe(true);
  });

  it('"query" state updates when text is typed into SearchForm\'s text input', () => {
    let wrapper = mount(<FilterableBookTable />);

    expect(wrapper.state('query')).toEqual('');
    wrapper.find('#bookSearch').at(0).simulate('change',
      {target: { value: 'Cloud Atlas', name: 'query' }
    });
    expect(wrapper.state('query')).toBe('Cloud Atlas');
  })
})