import React from 'react';
import { shallow , configure} from 'enzyme';
import LoginPage from './LoginPage';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<LoginPage/>', () => {

    it('should render LoginPage without errors', () => {
        const component = shallow(<LoginPage />)
        const wrapper = component.find('.LoginPage');
        expect(wrapper.length).toBe(0);
      });
})