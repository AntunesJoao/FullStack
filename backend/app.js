const express = require("express")
const app = express()
const cors = require("cors")
const serverless = require('serverless-http');

const cors = require("cors");

const corsOptions = {
  origin: "https://full-stack-nu-murex.vercel.app",
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.static("public"))

require("./bd/conn")


const  memoryRoutes = require("./routes")
app.use("/memories", memoryRoutes)
const port = process.env.PORT || 3000;

app.listen(port, async()=>{
    console.log(`Servidor rodando na porta ${port}`)
})