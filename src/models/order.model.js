const { database } = require('../config/database');
const { DataTypes, Model } = require('sequelize');
const { User } = require('./user.model');

class Order extends Model {}

Order.init({
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    total_amount : {
        type : DataTypes.DECIMAL(65, 2),
        allowNull : false
    }
}, { sequelize : database });

module.exports = { Order };

