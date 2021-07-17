import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './store'
import Menu from './components/menu/menu';

ReactDOM.render(
  <Provider store={Store}>
    <Menu/>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
