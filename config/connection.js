// Import Sequelize constructor
const sequelize = require('sequelize');
const Sequelize = require('sequelize');

require('dotenv').config();

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_Name, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
};