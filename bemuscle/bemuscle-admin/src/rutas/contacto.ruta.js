const express = require('express');
const ruta = express.Router()

const {mostrar}= require('../controladores/contacto.controlador')

ruta.get('/contacto/', mostrar)

module.exports = ruta
