import React from 'react';
import { shallow , configure} from 'enzyme';
import ArticleListPage from './ArticleListPage';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<ArticleListPage/>', () => {

    it('should render ArticleListPage without errors', () => {
        const component = shallow(<ArticleListPage />)
        const wrapper = component.find('.ArticleListPage');
        expect(wrapper.length).toBe(1);
      });
})