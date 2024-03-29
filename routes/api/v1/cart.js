const express = require('express');

const router = express.Router();
const cartApi = require('../../../controllers/api/v1/cart');
const passport = require('passport');

router.get('/',passport.authenticate('jwt', {session: false}) ,cartApi.getCart);
router.get('/quantity',passport.authenticate('jwt', {session: false}) ,cartApi.getCartQuantity);
router.get('/price-details',passport.authenticate('jwt', {session: false}) ,cartApi.getCartPriceDetails);
router.post('/',passport.authenticate('jwt', {session: false}), cartApi.createCart);
router.put('/',passport.authenticate('jwt', {session: false}), cartApi.updateCart);
router.delete('/',passport.authenticate('jwt', {session: false}), cartApi.removeCart);
router.use('*', function(req, res){
    res.status(404).json({
        message: 'Page Not Found'
    });
});
module.exports = router;