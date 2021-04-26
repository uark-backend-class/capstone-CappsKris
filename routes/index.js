const{getTicker, getTrendingTicker, postFavoriteToDb, getAllFavorites} = require('../controllers/controllers');
const router = require('express').Router();
const stock = require('../controllers/controllers');

router.get('/ticker/:ticker', getTicker);

router.get('/trendingTicker/:ticker', getTrendingTicker);

//post route to save favorite
router.post('/addFavorite', postFavoriteToDb);

// //get route to get all favorites
router.get('/favorites', getAllFavorites);



router.get('/', stock.stockPage);
// //get route to get a single favorite by id
// router.get('/favorite/:id', callback);

// // delete route to delete a favorite
// router.delete('favorite/:id', callback)

// // update route to update nickname of stock
// router.put('/favorite/:id', callback)


module.exports = router;