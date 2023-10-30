const mongoose = require("mongoose")


//lNES70n0C379hGhI
//caiofelipe
async function main() {
    try {
        
        mongoose.set('strictQuery', true)

        await mongoose.connect(
            "mongodb+srv://caiofelipe:lNES70n0C379hGhI@apicluster.c9kfcqd.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("Conectado ao banco!") 

    } catch (error) {
        console.log(`Erro:${error}`)        
    }
}

module.exports = main

