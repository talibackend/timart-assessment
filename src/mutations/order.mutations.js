const graphql = require('graphql');
const { GraphQLFloat, GraphQLInt } = graphql;
const { OrderType } = require("../types");
const { Order } = require('../models/index');

const orderMutations = {
    createOrder : {
        type : OrderType,
        args : {
          UserId : { type : GraphQLInt },
          total_amount : { type : GraphQLFloat }  
        },
        async resolve(parent, args){
            let order = await Order.create({...args});
            return order;
        }
    }
}

module.exports = { orderMutations }