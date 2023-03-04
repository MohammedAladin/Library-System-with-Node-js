const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const schema = new mongoose.Schema ({

    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

})

schema.method("generateAuthToken", async function () {
    const token = await jwt.sign( //start from here and put the secret key in config file
        { _id: this._id ,
        adminRole: this.isAdmin
        }, config.get('jwtsec'));
    return token;
})

let user = mongoose.model("users",schema)

module.exports = user