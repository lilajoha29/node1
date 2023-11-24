const mongoose = require('mongoose')

const Schema = mongoose.Schema
const BookSchema = new Schema ({
    name:{
        type:String,
        require: true,
        maxLength:100
    },
    editorials:{
        type:String,
        require: true,
        maxLength:100
    },
})

module.exports = mongoose.model('Book', BookSchema)