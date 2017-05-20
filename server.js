const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/data', (req, res) => {
  return res.send({ fu: 1 });
});

app.use(express.static(`${__dirname}/public`));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port);
module.exports = app;

