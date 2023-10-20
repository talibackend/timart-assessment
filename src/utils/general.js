const validator = (schema, body)=>{
    const { error, value } = schema.validate(body);

    if(error){
        throw error.details[0].message
    }

    return value;

}

module.exports = {
    validator
}