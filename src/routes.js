import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Home from './components/Home';
import AdvertPage from "./components/Advert/AdvertPage";

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="advert/:advertId">
      <IndexRoute component={AdvertPage}/>
    </Route>
  </Route>
);

export default routes;