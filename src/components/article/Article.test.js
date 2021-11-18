import React from 'react';
import { shallow, configure } from 'enzyme';
import Article from './Article';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Article/>', () => {
    it('should render without errors', () => {
        const component = shallow(<Article />);
        const wrapper = component.find('.Article');
        expect(wrapper.length).toBe(1);
      });
})