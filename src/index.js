import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import store from './app/store';
import { Provider } from 'react-redux';
import xLog from './utils/hjhpLog';
import { setLan } from './i18n/index';
import { getQueryStringByName } from './utils/common';

let language = getQueryStringByName('language');
if (language.length > 0) {
  try {
    localStorage.setItem('language', language);
  } catch (e) {
    console.log('setLocalstorage fail', e);
  }
} else {
  language = localStorage.getItem('language');
}

if (language === 'auto' || !language) {
  if (navigator.language.indexOf('en') > -1) {
    setLan('en-US');
  } else {
    setLan('zh-CN');
  }
} else if (language === 'en') {
  setLan('en-US');
} else {
  setLan('zh-CN');
}

window.HJHPLog = xLog;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
