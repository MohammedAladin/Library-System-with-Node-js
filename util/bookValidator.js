const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
    "type":"object",
    "properties":{
        "name":{
            "type":"string",
            "minLength":3,
            "maxLength":100,
        },
        "author":{
            "type":"string",
        },
        "bookPages":{
            "type":"string",
            
        },
        "bookPrice":{
            "type":"string",
        
        },
        "isAvaliable":{
            "type":"boolean",
        }
    },
    "required":["name","author","bookPrice","bookPages"],
};

module.exports = ajv.compile(schema);