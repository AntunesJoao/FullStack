const express = require("express")
const router = express.Router()

const upload = require("./helpers/upload")


// Aqui é onde fica as rotas 
const {createMemory, getMemories}= require("./controllers/MemoryControllers")

// validação se enviou um arquivo ou não 
// Quando o arquivo passa por aqui, o nome é alterado para a data atual
router.post("/memories", upload.single("image"), (req,res, next)=>{
    const image = req.file
    if(!image){
        return res.status(400).json({msg: "Por favor, envie um arquivo."})
    }
    next()
},(req, res) => createMemory(req, res))


router.get("/memories", (req, res) => getMemories(req, res))

module.exports = router