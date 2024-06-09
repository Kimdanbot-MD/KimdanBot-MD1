const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const { Schema } = mongoose

const libros = new Schema({
  titulo: {
    type: String, 
    requiered: true
  },
  enlace: {
    type: String, 
    requiered: true
  } 
}, { collection: 'Kim.Libros', versionkey: false })

const lib = mongoose.model('Kim.Libros', libros) 
module.exports = lib 
