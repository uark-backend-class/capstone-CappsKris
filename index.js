const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded());
app.use(express.urlencoded());

app.use(router);

app.listen(3000, () => {
  console.log('Now listening on port 3000')
})