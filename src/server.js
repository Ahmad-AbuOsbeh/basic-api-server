'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');
const foodRouter = require('../src/routes/food');
const clothesRouter = require('../src/routes/clothes');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
function start(port) {
  app.listen(port, () => {
    console.log(`Listining on PORT ${port}`);
  });
}

app.get('/', (req, res) => {
  res.send('Home sever Route');
});
app.use('/api/v1/food', foodRouter);
app.use('/api/v1/clothes', clothesRouter);

app.get('/bad', (req, res) => {
  throw new Error('500 server error');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app,
  start,
};
