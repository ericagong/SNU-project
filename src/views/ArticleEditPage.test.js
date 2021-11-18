import React from 'react';
import { shallow , configure} from 'enzyme';
import ArticleEditPage from './ArticleEditPage';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<ArticlevPage/>', () => {

    it('should render ArticleEditPage without errors', () => {
        const component = shallow(<ArticleEditPage />)
        const wrapper = component.find('.ArticleEditPage');
        expect(wrapper.length).toBe(1);
      });
})