const mongoose = require("mongoose")
 const Schema = mongoose.Schema
 
 // Aqui se faz os campos que o usuario vai poder interagir 
 // O Schema serve para fazer uma validação do que o usuario pode enviar
 const commentSchema = new Schema({
     name: {
         type: String,
         require: true
 
     },
     store: {
         type: String,
         require: true
     },
 
     number: {
         type: String,
         require: true
     },
     src: {
         type: String,
         require: true
     }
 })
 
 // Criei um outro Schema que vai servir para mostrar todos os dados em outra pagina
 // Coloquei todo o Schema  de comentario em um arry para juntar tudo em um só
 const MemorySchema = new Schema({
    
     comments: [commentSchema]
 },
     {timestamps: true}
 )
 
 // exportando para usar em outro arquivo
 module.exports = mongoose.model("Memory", MemorySchema)