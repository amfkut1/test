'use strict'

const {Schema, model} = require('mongoose') 

const user = new Schema({
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

 module.exports = model('User', user)