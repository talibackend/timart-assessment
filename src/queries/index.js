const { userQueries } = require('./user.queries');
const { orderQueries } = require('./order.queries');
const { GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
    name : "RootQuery",
    fields : {
        ...userQueries,
        ...orderQueries
    }
});