import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import {stockApp} from './reducers.js';
import {
  setDateFilter,
  sell,
  buy,
  insertStocks,
  replaceDisplayStocks,
} from './actions';
import {BrowserRouter} from 'react-router-dom';

let initialState = {
  insertStocks: [],
  userData: {account: {balance: 300000, stocks: {}}, transactions: []},
  date: new Date().toISOString().substring(0,10)
};
let store = createStore(
  stockApp,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
