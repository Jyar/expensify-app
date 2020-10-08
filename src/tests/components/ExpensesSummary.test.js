import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary }  from '../../components/ExpensesSummary';

test('should return 1 expense if no 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should return 2 expenses if multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {2} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});


