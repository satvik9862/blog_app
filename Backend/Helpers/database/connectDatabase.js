const mongoose = require("mongoose")

const connectDatabase =async  () => {

    await mongoose.connect("mongodb+srv://gaikwadsatvik555:satvik555@cluster0.gwj3knx.mongodb.net/Login",{useNewUrlParser : true})

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase
