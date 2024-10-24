const mongoose = require("mongoose")

const ID = "mongodb+srv://mail2ajay1994:kbC0z0z3VJTaI8pU@cluster0.ekypk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connect = ()=>{
   return  mongoose.connect(ID)
}

module.exports = {connect}