const multer = require("multer")
 
 const path = require("path")
 
 const storage = multer.diskStorage({
     destination: function(req, file, cb){
         // erro               onde a imagem vai ser salva
         cb(null, path.join(__dirname, "../public/images"))
     },
     filename: function(req, file, cb){
         // erro       como vai ficar o nome do arquivo com base na data atual mais o nome original
         cb(null, Date.now() + path.extname(file.originalname))
     },
 })
 
 // filtrando que tipo de arquivos os usuarios podem colocar
 const fileFilter  = (req, file, cb) => {
     if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
         cb(null, true)
     }else{
         cb(null, false)
     }
 }
 
 // dependencia que faz o upload de arquivos multer
 const upload = multer({
     storage,
     fileFilter 
 })
 
 // exportando para usar em outro arquivo
 module.exports = upload