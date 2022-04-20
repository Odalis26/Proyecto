const express = require('express');
const rutas = express.Router()

const {mostrar}= require('../controladores/ejercicioMenu.controlador')
const {isLoggedIn} = require('../lib/auth')
rutas.get('/Menu/', isLoggedIn, mostrar)


module.exports = rutas
