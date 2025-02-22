const jwt = require('jsonwebtoken');


let generateToken = (user)=>{
    return  jwt.sign({ user: user.email, id:user._id}, process.env.JWT_KEY);
}

module.exports.generateToken = generateToken;