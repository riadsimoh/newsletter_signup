const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const { static } = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Server is running on porte 3000');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});
