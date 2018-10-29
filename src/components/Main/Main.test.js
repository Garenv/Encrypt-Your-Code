import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import Main from '../../components/Main/Main';
import ButtonEncrypt from '../../containers/Buttons/ButtonEncrypt/ButtonEncrypt';

configure({adapter: new Adapter()}); // enzyme is now connected

describe('<Main/>', () => {
    it('should show this', () => {
        const wrapper = shallow(<ButtonEncrypt/>);
        expect(wrapper.find('button')).toHaveLength(1);
    });
});