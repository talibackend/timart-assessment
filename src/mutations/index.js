const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const { userMutations } = require('./user.mutations');

module.exports = new GraphQLObjectType({
    name : "RootMutation",
    fields : {
        ...userMutations
    }
})