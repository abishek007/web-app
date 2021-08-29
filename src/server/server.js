// Module Imports
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes';
import HTML from './HTML';
import { Provider } from 'react-redux';
import store from '../client/store'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const port = 3000;
const server = express();

server.use(express.static('public'))
server.get('/*', (req, res) => {
  /**
   * This is where all the magic happens with Styled Components and
   * rendering our React application to string so we can insert it
   * into our HTML template to send to the client.
  **/

  const title = 'Wep Application';
  const sheet = new ServerStyleSheet();
  const context = {}
  const styles = sheet.getStyleTags();

  const body = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
          <Routes />
      </StaticRouter>
    </Provider>
  ));
  
  res.send(HTML({ title, styles, body })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);