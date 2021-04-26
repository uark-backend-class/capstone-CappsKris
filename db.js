const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.HOST_DB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

db.on('open', () => {console.log('DB now connected')});