import React from 'react';
import { shallow , configure} from 'enzyme';
import ArticleDetailPage from './ArticleDetailPage';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<ArticleDetailPage/>', () => {

    it('should render ArticleDetailPage without errors', () => {
        const component = shallow(<ArticleDetailPage />)
        const wrapper = component.find('.ArticleDetailPage');
        expect(wrapper.length).toBe(1);
      });
})