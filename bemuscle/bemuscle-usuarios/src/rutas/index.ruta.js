const express = require('express');
const ruta = express.Router()

const {mostrar, verificar}= require('../controladores/index.controlador')

ruta.get('/', mostrar)

ruta.post('/', verificar)

module.exports = ruta