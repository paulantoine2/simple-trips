import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import AppRoutes from './components/AppRoutes';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import 'isomorphic-fetch';
import './static/css/global.css';
import './static/css/homepage.css';
import './static/css/content.css';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, ApolloClient } from 'react-apollo'
import networkInterface from './helpers/create-apollo-client';

const store = createStore(rootReducer);

const client = new ApolloClient({
  networkInterface
});

ReactDOM.render(
    <ApolloProvider store={store} client={client}>
      <AppRoutes/>
    </ApolloProvider>
  , document.getElementById('main'));
registerServiceWorker();