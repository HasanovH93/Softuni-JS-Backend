const mongoose = require('mongoose');


// TODO change database according to assignment
const CONNECTION_STRING = 'mongodb://localhost:27017/tutorials'

module.exports = async (app) => {
   try {
    await mongoose.connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        UseUnifiedTopology: true
    })
    console.log("Database connected")
   }catch(err){
   console.error(err.message);
   process.exit(1)
   }
};