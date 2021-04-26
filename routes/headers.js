require('dotenv').config();

function setHeaders(tickerSymbol, useFun){ 
  useFun.query({
    "symbols": tickerSymbol,
    "region": "US"
  });

  useFun.headers({
    "x-rapidapi-key": process.env.HOST_APIKEY,
    "x-rapidapi-host": process.env.HOST_NAME,
    "useQueryString": true
  });
}

module.exports = setHeaders;