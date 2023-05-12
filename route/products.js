const express = require('express')
const productController = require('../controller/product')

let router = express.Router()

router.get('/all',productController.getProducts)

router.post('/product',productController.postProduct)

router.delete('/product/:id',productController.deleteProduct)

module.exports = router;