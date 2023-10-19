const { userQueries } = require('./user.queries');
const { GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
    name : "RootObject",
    fields : {
        ...userQueries
    }
});