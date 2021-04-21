const findTickerData = require('./headers');
const router = require('express').Router();

router.get('/ticker/:ticker', (req, res) => {
  const tickerSymbol = req.params.ticker;
  return findTickerData(tickerSymbol);
});

module.exports = router;