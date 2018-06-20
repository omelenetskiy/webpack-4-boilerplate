import React from 'react';
import Main from '../src/Main';
import { render } from 'enzyme';

it('should render a App', () => {
	const wrapper = render(<Main />);
	expect(wrapper).toMatchSnapshot();
});
