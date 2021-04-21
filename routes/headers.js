const unirest = require("unirest");
const req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes");
let stockData = {};

function setHeaders(tickerSymbol){ 
  req.query({
    "symbols": tickerSymbol,
    "region": "US"
  });

  req.headers({
    "x-rapidapi-key": "f766fc8551mshc523692583d6420p1ad637jsn44ffa45191fc",
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "useQueryString": true
  });
}
function findTickerData(tickerSymbol) {
  setHeaders(tickerSymbol);

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    const responseData = res.body.quoteResponse.result[0];
    let dataObj = {};
    dataObj.price = responseData.regularMarketPrice;
    dataObj.symbol = tickerSymbol;
    dataObj.marketHigh = responseData.regularMarketDayHigh;
    dataObj.marketLow = responseData.regularMarketDayLow;
    console.log('data===', dataObj);
    setStockData(dataObj);
  });
  console.log('the game==', stockData);
  return stockData;
}

function setStockData(data) {
  stockData = {...data};
}

module.exports = findTickerData;