import React from 'react';
import { shallow, configure } from 'enzyme';
import Comment from './Comment';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Comment/>', () => {
    it('should render without errors', () => {
        const component = shallow(<Comment />);
        const wrapper = component.find('.Comment');
        expect(wrapper.length).toBe(1);
      });
})