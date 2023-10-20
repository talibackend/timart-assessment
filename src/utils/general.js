const validator = (schema, body)=>{
    const { error, value } = schema.validate(body);

    if(error){
        throw { message : error.details[0].message }
    }

    return value;

}