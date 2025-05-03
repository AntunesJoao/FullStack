const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main(){
    await mongoose.connect(`mongodb+srv://antunesjoao81:${process.env.DBPASS}@cluster0.6ef98ci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    console.log("Banco de dados conectado!!!")
}

main().catch((err)=> console.log(err))

module.exports = main