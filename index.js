const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

require('./db.js');

app.use(express.urlencoded());
app.use(express.json()); 
app.use(bodyParser.urlencoded());


app.use(router);

app.listen(3000, () => {
  console.log('Now listening on port 3000')
})