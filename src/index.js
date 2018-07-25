import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';

const ele = (
  <Provider store={store}>
    <Application />
  </Provider>
);

ReactDOM.render(ele, document.getElementById('root'));
