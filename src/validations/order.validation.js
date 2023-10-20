const Joi = require('joi');
const { validator } = require('../utils/general');

const createOrderValidation = (body)=>{
    const schema = Joi.object({
        UserId : Joi.number().required(),
        total_amount : Joi.number().required()
    });

    return validator(schema, body);
}

module.exports = {
    createOrderValidation
}