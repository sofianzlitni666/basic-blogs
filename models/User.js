const mongoose = require("mongoose") ;


const {Schema , model } = mongoose ;

const UserSchema = new Schema ({

    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true,
        
       },
    password : {
        type: String,
        required: true,
        }
    }, { timestamps: true });



module.exports = User = model('User', UserSchema)