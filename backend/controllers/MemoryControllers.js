const Memory = require("../models/Memory")



// onde fica o codigo principal para as requisições
const createMemory = async(req, res) =>{
   try {
    const {name, store, number} = req.body
    const src = `/images/${req.file.filename}`

    
    
    if(!name || !store || !number){
        return res.status(400).json({msg:  "Por favor preencha todos os campos."})
    }

    if (!req.file) {
        return res.status(400).json({ msg: "Por favor,,,, envie um arquivo." });
      }

    // aqui ele vai criar o que o usuario mandou  (ainda nao foi enviado para o banco)
    const newMemory = new Memory({
        comments: [
          {
            name,
            store,
            number,
            src,
          },
        ],
      });
    //Enviando para o banco de dados Mongoose Atlas
    await newMemory.save()

    res.json({msg: "Criado com sucesso", newMemory})

   } catch (error) {
    console.log(error.message)
    res.status(500).send("Ocorreu um eroo!")
    
   }
}

//resgatando todas as memorias para exibir na home
const getMemories = async(req, res) =>{
  try {
    
    const memories = await Memory.find()
    res.json(memories)

  } catch (error) {
    res.status(500).send("Ocorreu um eroo!")
  }
}

// exportando a função para usar em outro arquivo
module.exports = {
    createMemory,
    getMemories
}