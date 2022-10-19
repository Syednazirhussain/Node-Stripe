require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

app.use(express.json());

const customer = require('./routes/customer');
const payment = require('./routes/payment');

app.use('/api/v1/customer', customer);
app.use('/api/v1/payment', payment);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
