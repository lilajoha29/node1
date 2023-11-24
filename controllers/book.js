const { json } = require('express')
const Book = require('../models/book')

const controllerBook = {
    create: async (req,res) => {
        try {
            const name = req.body.first_name
            const editorials = req.body.editorials
            await Book.create({
                name: name,
                editorials: editorials
            })
            res.json({msg:'libro creado'})
        }catch(err) {
            return res.status(500),json({msg:err.message})
        }
    },
    getBooks: async (req,res) =>{
        try{
            const books = await Book.find({})
            res.json(books)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    getBookForId: async (req,res) =>{
        try{
            const {id} = req.params
            const book = await book.findById(id)
            res.json(book)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateBook: async (req,res) =>{
        try{
            const {id} = req.params
            const name = req.body.first_name
            const editorials = req.body.editorials
            await Book.findByIdAndUpdate(id,{
                name: name,
                editorials: editorials
            })
            res.json({msg:'Update'})
        }catch(err){
            console.error(err)
            return res.status(500).json({msg:err.message})            
        }
    },
    deleteBook:async (req,res)=>{
        try {
            const {id} = req.params
            await Book.findByIdAndDelete(id)
            res.json({msg:'Delete'})     
        } catch (err) {
            console.error(err)
            return res.status(500).json({msg:err.message})
        }
    }

}

module.exports = controllerBook