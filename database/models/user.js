/**
* Required modules
*/
const db = require('../db.js');
/**
* The model
*/
const User = db.model('User', {
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    firstname: {type:String, required:true},
    lastname: {type:String, required:true}
});
/**
* Exporting
*/
module.exports = User;
