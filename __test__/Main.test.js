import React from 'react';
import Main from '../src/Main';
import { render, shallow } from 'enzyme';

describe('<Main />', () => {
  it('should render a Main', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
