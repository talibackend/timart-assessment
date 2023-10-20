const { Order, User } = require('../models/index');
const { createOrderValidation } = require('../validations/order.validation');
const messages = require('../utils/messages');

const createOrderResolver = async (body)=>{
    const payload = createOrderValidation(body);

    let searchUser = await User.findOne({ where : { id : payload.UserId } });

    if(!searchUser){
        throw messages.INVALID_USERID;
    }

    let order = await Order.create({...payload});

    return order;
}

module.exports = {
    createOrderResolver
}