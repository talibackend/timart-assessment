const express = require('express');
const app = express();
const { database } = require('./config/database');
require('./models/index');

database.sync({ alter : true }).then(()=>{
    app.listen(process.env.PORT, ()=>{ console.log(`Server running on :${process.env.PORT}`) });
}).catch(error=>{ console.error(`Database connection failed.\nError: ${error}`) });

module.exports = app;