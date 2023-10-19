const express = require('express');
const app = express();
const { database } = require('./config/database');
require('./models/index');
const { graphqlHTTP } = require('express-graphql');

database.sync({ alter : true }).then(()=>{
    app.listen(process.env.PORT, ()=>{ console.log(`Server running on :${process.env.PORT}`) });
}).catch(error=>{ console.error(`Database connection failed.\nError: ${error}`) });

app.use('/graphql', graphqlHTTP({ graphiql : true }))

module.exports = app;