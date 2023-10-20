const graphql = require('graphql');
const { GraphQLFloat, GraphQLInt, GraphQLError } = graphql;
const { OrderType } = require("../types");
const { createOrderResolver } = require('../resolvers/order.resolvers');

const orderMutations = {
    createOrder : {
        type : OrderType,
        args : {
          UserId : { type : GraphQLInt },
          total_amount : { type : GraphQLFloat }  
        },
        async resolve(parent, args){
            try{
                return await createOrderResolver(args);
            }catch(error){
                console.error(error)
                throw new GraphQLError(error);
            }
        }
    }
}

module.exports = { orderMutations }