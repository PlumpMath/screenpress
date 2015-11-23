import path from 'path';
import Express from 'express';
import qs from 'qs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { RoutingContext, match } from 'react-router';
import { routes } from '../common/routes';
import createLocation from 'history/lib/createLocation';
import config from './config';
import configureStore from '../common/store/configureStore';

const app = new Express();
const port = 3000;

// Use this middleware to server up static files built into dist
app.use(require('serve-static')(path.join(__dirname, '../dist')));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // history location
  let location = createLocation(req.url);

  // Read the counter from the request, if provided
  const params = qs.parse(req.query);

  // Compile an initial state
  // TODO: This will probably come from the server somewhere.
  const initialState = { };

  // Create a new Redux store instance
  const store = configureStore(initialState);

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  // See react-router's Server Rendering section:
  // https://github.com/rackt/react-router/blob/master/docs/guides/advanced/ServerRendering.md
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    } else if (error) {
      res.status(500).send(error.message)
    } else if (renderProps == null) {
      res.status(404).send('Not found')
    } else {
      // Render the component to a string with the RoutingContext
      let html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      );
      res.send(renderFullPage(html, finalState));
    }
  });

  // Send the rendered page back to the client
}

function renderFullPage(html, initialState) {
  return `
<!doctype html>
<html>
<head>
  <title>Screen Press</title>
  <link type="text/css" rel="stylesheet" href="${config().assetHost}/dist/styles.css" />
</head>
<body>
  <div id="app">${html}</div>
  <script>
    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
  </script>
  <script src="${config().assetHost}/dist/bundle.js"></script>
</body>
</html>
    `;
}

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`🌎 Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
