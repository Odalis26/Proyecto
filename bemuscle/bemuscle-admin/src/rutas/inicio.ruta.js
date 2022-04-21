const express = require('express');
const rutas = express.Router()

const {mostrar}= require('../controladores/inicio.controlador')
const {isLoggedIn} = require('../lib/auth')
rutas.get('/inicio/', isLoggedIn, mostrar)


module.exports = rutas