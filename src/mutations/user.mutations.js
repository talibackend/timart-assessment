const graphql = require('graphql');
const { GraphQLString, GraphQLError } = graphql;
const { UserType } = require("../types");
const { createUserResolver } = require('../resolvers/user.resolvers');

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
            try{
                return await createUserResolver(args);
            }catch(error){
                console.error(error)
                throw new GraphQLError(error);
            }
        }
    }
}

module.exports = { userMutations }