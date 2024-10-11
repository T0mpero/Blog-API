const express = require('express');
const router = express.Router();
const categoriesRoutes = require('../categories/categoryController');

router.get('/', (req, res) =>{
    res.render('home');
});

router.use('/', categoriesRoutes);

module.exports = router;