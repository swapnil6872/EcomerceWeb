const mongoose = require('mongoose');
const config = require('config')
const debug  = require('debug')('development:mongoose');

mongoose
.connect(`${config.get("MONGODB_URI")}/ecomerce`)
.then(()=>{
   console.log("MongoDB Connected"); 
   debug('connected')
})
.catch((err)=>{
    debug(err)
})


module.exports = mongoose.connection;