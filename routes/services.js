const unirest = require("unirest");
require('../db');
const Stock = require('../mongoose/schema');
const setHeaders = require('./headers');
const getQuoteReq = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes");
const getTrendingReq = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers");

let stockData;

function findTickerData(tickerSymbol) {
  setHeaders(tickerSymbol, getQuoteReq);

  getQuoteReq.end(async function (res) {
    if (res.error) throw new Error(res.error);
    const responseData = res.body.quoteResponse.result[0];
    let dataObj = {};
    dataObj.price = responseData.regularMarketPrice;
    dataObj.symbol = tickerSymbol;
    dataObj.marketHigh = responseData.regularMarketDayHigh;
    dataObj.marketLow = responseData.regularMarketDayLow;

    await setStockData(dataObj);
  });

  return stockData;
}

function findTrendingTicker(trendingTickerSym) {
    setHeaders(trendingTickerSym, getTrendingReq);

    getTrendingReq.end(async function (res) {
      if (res.error) throw new Error(res.error);
      const responseTicker = res.body.finance.result[0];
      let tickerObj = {};
      tickerObj.timeZone = responseTicker.quotes[0].exchangeTimezoneName;
      tickerObj.marketPrice = responseTicker.quotes[0].regularMarketPrice;
      tickerObj.marketTime = responseTicker.quotes[0].regularMarketTime;
      tickerObj.symbol = trendingTickerSym;

      await setStockData(tickerObj);
    });

    return stockData;
}

async function setStockData(data) {

  stockData = data;
}

async function addFavoriteToDb(data) {
  console.log("Add to DB", data);
  const symbol = await data.tickerSymbol;
  const stockName = data.stockName;
  const nickName = data.nickName;
}

async function getAllFavorites(stockData) {
  let allFavorites = await Stock.getAllFavorites(req.body);
  res.json(allFavorites);
}

module.exports = {
  findTickerData,
  findTrendingTicker,
  addFavoriteToDb,
  getAllFavorites
}