const sequelize = require('sequelize');

const connection = new sequelize('blog', 'root', 'root',
    {dialect : 'mysql', host : 'localhost'}
);

module.exports = connection;