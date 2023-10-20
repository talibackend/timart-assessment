const Joi = require('joi');
const { validator } = require('../utils/general');

const createUserValidation = (body)=>{
    const schema = Joi.object({
        first_name : Joi.string().required(),
        last_name : Joi.string().required(),
        email : Joi.string().email().required(),
        username : Joi.string().required()
    });

    return validator(schema, body);
}