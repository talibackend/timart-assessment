require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: Number(process.env.DB_PORT)
});

connection.query(`SELECT 
                    u.id, 
                    u.username, 
                    u.first_name, 
                    u.last_name, 
                    u.email, 
                    COUNT(o.id) AS order_count
                    FROM Users AS u
                    JOIN Orders AS o ON u.id = o.UserId
                    GROUP BY u.id, u.username
                    ORDER BY order_count DESC
                    LIMIT 10`, (err, result) => {
    if (err) {
        console.log(err);
        throw new Error("Sorry an error occured");
    }
    console.log(result);
    connection.end();
})