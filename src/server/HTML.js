/**
 * HTML
 * This HTML.js file acts as a template that we insert all our generated
 * application strings into before sending it to the client.
 */

const HTML = ({ body, styles, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.11.2/antd.css">
      <title>${title}</title>
      ${styles}
    </head>
    <body>
      <div id="root">${body}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`;

export default HTML