import React from 'react';
import { shallow , configure} from 'enzyme';
import ArticleCreatePage from './ArticleCreatePage';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<ArticleCreatePage/>', () => {

    it('should render ArticleCreatePage without errors', () => {
        const component = shallow(<ArticleCreatePage />)
        const wrapper = component.find('.ArticleCreatePage');
        expect(wrapper.length).toBe(1);
      });
})