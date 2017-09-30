import React, { PropTypes } from 'react';

const Html = ({ content, state }) => (
<html>
  <head>
    <title>Simple trips</title>
    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet"/>
    <link href="../node_modules/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
    <meta charset="ISO-8859-1"/>
  </head>
  <body>
    <div id="main" dangerouslySetInnerHTML={{ __html: content }}></div>
    <script
      dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${JSON.stringify(state)};` }}
      charSet="UTF-8"
    />
  </body>
</html>

);

Html.propTypes = {
  content: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Html;