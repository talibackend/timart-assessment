const graphql = require('graphql');
const { GraphQLInt } = graphql;
const { UserType } = require('../types/index');
const { User } = require('../models/index');

const userQueries = {
    getUserById: {
        type: UserType,
        args: { id: { type: GraphQLInt } },
        async resolve(parent, args) {
            return await User.findOne({ where: { id : args.id } })
        }
    }
};

module.exports = { userQueries };

