const express = require('express');
const ruta = express.Router()

const {mostrar}= require('../controladores/index.controlador')

ruta.get('/', mostrar)

module.exports = ruta