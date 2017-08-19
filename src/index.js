import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import AppRoutes from './components/AppRoutes';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj6drg2lw3e470101jbw2veh0'
});
const client = new ApolloClient({
  networkInterface
});


ReactDOM.render(
    <ApolloProvider store={store} client={client}>
      <AppRoutes/>
    </ApolloProvider>
  , document.getElementById('main'));
registerServiceWorker();