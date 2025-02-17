const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const path = require('path');

const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(
  require('webpack-hot-middleware')(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  })
);

// Serve the appropriate HTML file based on the route
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'admin.html'));
});

app.get('/store/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'store.html'));
});

// Handle all other routes with index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(8080, () => {
  console.log('App is listening on port 8080!');
  console.log('Visit:');
  console.log('  - http://localhost:8080/ for main app');
  console.log('  - http://localhost:8080/admin for admin panel');
  console.log('  - http://localhost:8080/store for store page');
});
