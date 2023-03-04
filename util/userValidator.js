const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
    "type": "object",
    "properties": {
    
        "email": {
            "type": "string",
        },
        "password": {
            "type": "string",
            "minLength": 8,
            "maxLength": 20
        },
        "isAdmin": {
            "type": "boolean"
        }
    },
    "required": ["email", "password"],
}

module.exports = ajv.compile(schema);