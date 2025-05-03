const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

require("./bd/conn")


const  memoryRoutes = require("./routes")
app.use("/memories", memoryRoutes)
const port = 3000

app.listen(port, async()=>{
    console.log(`Jhonata rodando na porta ${port}`)
})