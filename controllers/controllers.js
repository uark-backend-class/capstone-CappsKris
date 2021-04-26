const {findTickerData, findTrendingTicker, addFavoriteToDb, getTrendingTickers} = require('../routes/services');
const Stock = require('../mongoose/schema');
require('../routes/index');
require('../db');

const getTicker = async (req, res) => {
  const tickerSymbol = req.params.ticker;
  res.send(await findTickerData(tickerSymbol));
  // TODO instead of sending data, use res.render to render
  // a handlebars file with stock data
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

  let stocks = await getTrendingTickers();

  res.render('list', { header: mainHeader, stocks });
}

module.exports = {
  getTicker,
  getTrendingTicker,
  postFavoriteToDb,
  getAllFavorites,
  stockPage
}