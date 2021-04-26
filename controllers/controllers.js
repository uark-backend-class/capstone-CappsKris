const {findTickerData, findTrendingTicker, addFavoriteToDb} = require('../routes/services');
const Stock = require('../mongoose/schema');
require('../routes/index');
require('../db');

const getTicker = (req, res) => {
  const tickerSymbol = req.params.ticker;
  res.send(findTickerData(tickerSymbol));
}

const getTrendingTicker = (req, res) => {
  const tickerSymbol = req.params.ticker;
  res.send(findTrendingTicker(tickerSymbol));
}

const postFavoriteToDb = (req, res) => {
  console.log("post fav===", req.body);
  // const firstName = req.body.firstName;

  res.send(addFavoriteToDb(req.body));
}

const getAllFavorites = (req, res) => {
  const stockTicker = req.body.tickerSymbol;
  console.log('dataaa==', stockTicker);
  res.send(stockTicker);
}

const stockPage = async (req, res) => {
  let mainHeader = "Stock Finder";

  let stocks = await Stock.find({}).lean();

  res.render('list', { header: mainHeader, stocks });
}

module.exports = {
  getTicker,
  getTrendingTicker,
  postFavoriteToDb,
  getAllFavorites,
  stockPage
}