const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/categories', require('./categories'));
router.use('/products', require('./products'));
router.use('/top-deals', require('./top_deals'));
router.use('/daily-essentials', require('./daily_essentials'));
router.use('/wishlist', require('./wishlist'));
router.use('/search', require('./search'));
router.use('*', function(req, res){
    res.status(404).json({
        message: 'Page Not Found'
    });
});
module.exports = router;