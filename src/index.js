import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

import { icons } from './assets/icons'
import store from './store'

React.icons = icons

// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      <NotificationContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
