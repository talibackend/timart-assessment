const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt } = graphql;
const { UserType } = require('../types/index');
const { User } = require('../models/index');

const userQueries = {
    getUserById: {
        type: UserType,
        args: { id: { type: GraphQLInt } },
        async resolve() {
            return await User.findOne({ where: { id } })
        }
    }
};

module.exports = { userQueries };

