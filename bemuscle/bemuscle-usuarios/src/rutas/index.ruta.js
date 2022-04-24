const express = require('express');
const ruta = express.Router()

const {mostrar, verificar}= require('../controladores/index.controlador')

ruta.get('/index/', mostrar)

ruta.post('/index/', verificar)

module.exports = ruta