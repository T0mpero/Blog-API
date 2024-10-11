const sequelize = require('sequelize');
const connection = require('../database/Connection');
const Category = require('../categories/CategoriesModel');


const Article = connection.define('articles', {
    title : {type : sequelize.STRING, allowNull : false},
    slug : {type : sequelize.STRING, allownull: false},
    content : {type : sequelize.TEXT, allowNull : false}
});

Category.hasMany(Article); //1 TO N DB relations;
Article.belongsTo(Category); // 1 TO 1 DB relations;

Article.sync({force : false});

module.exports = Article;