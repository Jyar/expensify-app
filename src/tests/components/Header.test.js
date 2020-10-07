import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';


test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    //toJSON()
    expect(wrapper).toMatchSnapshot();
});

