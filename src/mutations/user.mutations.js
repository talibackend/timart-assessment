const graphql = require('graphql');
const { GraphQLString } = graphql;
const { UserType } = require("../types");
const { User } = require('../models');

const userMutations = {
    createUser : {
        type : UserType,
        args : {
            first_name : { type : GraphQLString },
            last_name : { type : GraphQLString },
            email : { type : GraphQLString },
            username : { type : GraphQLString }
        },
        async resolve(parent, args){
            let user = await User.create({...args});
            return user.dataValues;
        }
    }
}

module.exports = { userMutations }