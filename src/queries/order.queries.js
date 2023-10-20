const graphql = require('graphql');
const { GraphQLInt, GraphQLList } = graphql;
const { OrderType } = require('../types/index');
const { Order } = require('../models/index');

const orderQueries = {
    getOrderByUserId: {
        type: new GraphQLList(OrderType),
        args: { UserId: { type: GraphQLInt } },
        async resolve(parent, args) {
            return await Order.findAll({ where : { UserId : args.UserId }, order : [['id', 'desc']] });
        }
    }
};

module.exports = { orderQueries };

