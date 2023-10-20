const graphql = require('graphql');
const { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLInt } = graphql;

const OrderType = new GraphQLObjectType({
    name : "Order",
    fields : ()=>({
        id : { type : GraphQLInt },
        total_amount : { type : GraphQLFloat },
        createdAt : { type : GraphQLString },
        updatedAt : { type : GraphQLString },
        UserId : { type : GraphQLInt }
    })
});

module.exports = { OrderType }