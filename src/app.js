import React from 'react';
import path from 'path';
import { Server } from 'http';
import ReactDOM from 'react-dom/server';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { ApolloProvider, ApolloClient, renderToStringWithData } from 'react-apollo';
import Express from 'express';
import { match, RouterContext } from 'react-router';
import networkInterface from './helpers/create-apollo-client';
import NotFoundPage from './components/NotFoundPage';
import Html from './Html';
// A Routes file is a good shared entry-point between client and server
import routes from './routes';
// Note you don't have to use any particular http server, but
// we're using Express in this example
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  // This example uses React Router, although it should work equally well with other
  // routers that support SSR
  match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    // in case of error display the error message
    if (error) {
      return res.status(500).send(error.message);
    }

    // in case of redirect propagate the redirect to the browser
    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (renderProps) {
      // if the current route matched we have renderProps
      const client = new ApolloClient({
        ssrMode: true,
        networkInterface
      });
      const store = createStore(rootReducer);
      const app = (
        <ApolloProvider store={store} client={client}>
          <RouterContext {...renderProps} />
        </ApolloProvider>
      );
      renderToStringWithData(app).then((content) => {
        const initialState = {[client.reduxRootKey]: client.getInitialState() };
        const html = <Html content={content} state={initialState} />;
        res.status(200);
        res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
        res.end();
      });
    } else {
      // otherwise we can render a 404 page
      let markup = renderToString(<NotFoundPage/>);
      res.status(404);
      return res.render('index', { markup });
    }


  });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});