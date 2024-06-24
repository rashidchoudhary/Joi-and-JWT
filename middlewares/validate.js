const validate = (schema) => {
    return (req, res, next) => {
        // Validate the request body if the schema has a body key
        if (schema.body) {
            const { error } = schema.body.validate(req.body);
            if (error) {
                return res.status(400).send(error.details[0].message);
            }
        }
        
        // Validate the request params if the schema has a params key
        if (schema.params) {
            const { error } = schema.params.validate(req.params);
            if (error) {
                return res.status(400).send(error.details[0].message);
            }
        }

        next();
    };
};

export default validate;
