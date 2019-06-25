import React from 'react';
import { shallow, mount } from 'enzyme';
import FilterableBookTable from '../FilterableBookTable/FilterableBookTable';
import SearchForm from './SearchForm';

jest.mock('../../util/googleBooksAPIUtil.js');

describe('SearchForm', () => {
  it('renders without crashing', () => {
    let wrapper = shallow(<SearchForm />);
    expect(wrapper.exists()).toBe(true);
  });

  it('FilterableBookTable\'s "query" state updates when text is typed into SearchForm\'s text input', () => {
    let wrapper = mount(<FilterableBookTable />);
    expect(wrapper.state('query')).toBe('');
    
    wrapper.find('#bookSearch').simulate('change',
      { target: { value: 'Cloud Atlas', name: 'query' }
    });
    expect(wrapper.state('query')).toBe('Cloud Atlas');
  });

  it('calls FilterableBookTable\'s handleSubmit on user submit', () => {
    let wrapper = mount(<FilterableBookTable />);
    const element = wrapper.instance();

    jest.spyOn(element, 'handleSubmit');
    wrapper.find('#bookSearch').simulate('change',
      { target: { value: 'Cloud Atlas', name: 'query' }
    });
    wrapper.find('form').simulate('submit');
    expect(element.handleSubmit).toHaveBeenCalled();
  });

  it('FilterableBookTable\'s "maxResults" state updates when dropdown selection changes', () => {
    let wrapper = mount(<FilterableBookTable />);
    expect(wrapper.state('maxResults')).toBe(10);

    wrapper.find('select').simulate('change',
      { target: { value: '35', name: 'maxResults' } }
    );
    expect(wrapper.state('maxResults')).toBe('35');
  });

  it('FilterableBookTable\'s "familyFriendly" state toggles when checkbox is clicked', () => {
    let wrapper = mount(<FilterableBookTable />);
    expect(wrapper.state('familyFriendly')).toBe(true);

    wrapper.find('#familyFriendly').simulate('change', 
    { target: { checked: true } }
    );
    expect(wrapper.state('familyFriendly')).toBe(false);
    wrapper.find('#familyFriendly').simulate('change', 
    { target: { checked: false } }
    );
    expect(wrapper.state('familyFriendly')).toBe(true);
  });
})