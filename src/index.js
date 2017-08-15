import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import AppRoutes from './components/AppRoutes';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import registerServiceWorker from './registerServiceWorker';
import {showModal} from "./actions/index";

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));


ReactDOM.render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>
  , document.getElementById('main'));
registerServiceWorker();