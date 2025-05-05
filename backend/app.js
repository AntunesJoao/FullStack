const express = require("express")
 const app = express()
 const cors = require("cors")
 require('dotenv').config()
 
 app.use(cors())
 app.use(express.json())
 app.use(express.static("public"))
 
 require("./bd/conn")
 
 
 const  memoryRoutes = require("./routes")
 app.use("/memories", memoryRoutes)
 const port = process.env.PORT
 
 app.listen(port, async()=>{
     console.log(`Servidor rodando na porta ${port}`)
 })