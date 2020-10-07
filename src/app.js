import ReactDom from 'react-dom';
import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

// set default values here with dispatch
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
<Provider store = {store}>
  <AppRouter/>
</Provider>
);

console.log(store.getState());

  ReactDom.render(jsx, document.getElementById('app'));
