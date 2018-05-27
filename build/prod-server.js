/* eslint-disable */
const config = require('../config');
const path = require('path');
const express = require('express');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.build.port;

const app = express();

console.log(`App listening on port ${port}`)

// serve pure static assets
const staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory);
app.use(staticPath, express.static(path.resolve(__dirname, '..', 'dist/static')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist/index.html'));
});

module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
});
