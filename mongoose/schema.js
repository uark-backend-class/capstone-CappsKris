const mongoose = require('mongoose')
const Schema = mongoose.Schema;
require('../db');

const stockSchema = new Schema({
  tickerSymbol: {
    type: String,
    require: true
  },
  stockName: {
    type: String,
    require: true
  },
  nickName: String,
}, { timestamps: true });

const Stock = mongoose.model('Stock Favorite', stockSchema);

module.exports = Stock;