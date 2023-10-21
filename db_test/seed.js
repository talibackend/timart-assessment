require('dotenv').config();
const mysql = require('mysql2');
const Users = require('./Users.json');
const Orders = require('./Orders.json');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port : Number(process.env.DB_PORT)
});

const formattedUsers = Users.map((user)=>{ return [user.first_name, user.last_name, user.email, user.username, user.createdAt, user.updatedAt] });
const formattedOrders = Orders.map((order)=>{ return [order.total_amount, order.UserId, order.createdAt, order.updatedAt] });

const userSql = "INSERT INTO Users(first_name, last_name, email, password, createdAt, updatedAt) VALUES ?";
const orderSql = "INSERT INTO Orders(total_amount, UserId, createdAt, updatedAt)";

connection.query(userSql, formattedUsers, (err)=>{
    if(err){
        console.error(err);
        throw "Failed to insert users...";
    }
    connection.query(orderSql, formattedOrders, (err)=>{
        if(err){
            console.error(err);
            throw "Failed to insert orders...";
        }
        console.log("Data insertion completed...");
        connection.end();
    })
})