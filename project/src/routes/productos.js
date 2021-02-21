const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController')

router.get('/:id', productosController.productDetail);

router.get('/cart', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/product-cart'));
});

module.exports = router;