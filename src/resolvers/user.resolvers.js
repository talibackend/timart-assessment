const { User } = require('../models/index');
const { createUserValidation } = require('../validations/user.validations');
const messages = require('../utils/messages');

const createUserResolver = async (body) =>{
    const payload = createUserValidation(body);

    let searchEmail = await User.findOne({ where : { email : payload.email } });

    if(searchEmail){
        throw { message : messages.EMAIL_TAKEN }
    }

    let searchUsername = await User.findOne({ where : { username : payload.username } });

    if(searchUsername){
        throw { message : messages.USERNAME_TAKEN }
    }

    const user = await User.create({...payload});
    return user;
}