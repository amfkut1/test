/* eslint-disable no-console */

const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const ser = express()

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4000

// eslint-disable-next-line no-undef
ser.use(express.static(path.join(__dirname,'/public')))

async function  start() {
    try {
        const url = 'mongodb+srv://alexkut:26gRi!{V=q@clusterkut-ykjan.mongodb.net/test?retryWrites=true&w=majority'
        await mongoose.connect(url, {useNewUrlParser: true})
        ser.listen(PORT, () => {
            console.log(`Ser on port ${PORT}`)
        })
    } catch(e) {
        console.log(e)
    }
}


start()


  