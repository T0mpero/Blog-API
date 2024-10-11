const sequelize = require('sequelize');
const connection = require('../database/Connection');


const Category = connection.define('categories', {
    title : {type : sequelize.STRING, allowedNull : false},
    slug : {type : sequelize.STRING, allowedNull: false}

});


Category.sync({force : false});

module.exports = Category;