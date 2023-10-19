const { Sequelize } = require('sequelize');

const database = new Sequelize({
    dialect : 'mysql',
    host : process.env.DB_HOST,
    username : process.env.DB_USER,
    password : process.env.DB_PASS,
    port : Number(process.env.DB_PORT),
    database : process.env.DB_NAME
})

module.exports = { database };