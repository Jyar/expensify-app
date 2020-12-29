import ReactDom from 'react-dom';
import React from 'react';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {startSetExpenses} from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase';

const store = configureStore();

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
<Provider store = {store}>
  <AppRouter/>
</Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDom.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDom.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard');
      }
    });

  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
