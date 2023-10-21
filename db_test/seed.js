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

const formattedUsers = Users.map((user)=>{ return [user.id, user.first_name, user.last_name, user.email, user.username, "2023-10-20 20:50:33", "2023-10-20 20:50:33"] });
const formattedOrders = Orders.map((order)=>{ return [order.total_amount, order.UserId, "2023-10-20 20:50:33", "2023-10-20 20:50:33"] });

const userSql = 'INSERT INTO Users(id, first_name, last_name, email, username, createdAt, updatedAt) VALUES ?';
const orderSql = 'INSERT INTO Orders(total_amount, UserId, createdAt, updatedAt) VALUES ?';

connection.query(userSql, [formattedUsers], (err, result)=>{
    if(err){
        console.error(err);
        throw new Error("Failed to insert users...");
    }
    console.log(`${result.affectedRows} users inserted.`)
    connection.query(orderSql, [formattedOrders], (err, result)=>{
        if(err){
            console.error(err);
            throw new Error("Failed to insert orders...");
        }
        console.log(`${result.affectedRows} orders inserted.`)
        console.log("Data insertion completed...");
        connection.end();
    })
})