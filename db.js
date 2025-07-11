const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://sami:<db_password>@cluster0.w9qlbla.mongodb.net/DriveMate?retryWrites=true&w=majority', {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose