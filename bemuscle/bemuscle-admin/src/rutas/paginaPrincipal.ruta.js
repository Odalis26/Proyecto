const express = require('express');
const rutas = express.Router()

const {mostrar}= require('../controladores/paginaPrincipal.controlador')
const {isLoggedIn} = require('../lib/auth')
rutas.get('/Agregar/:id', isLoggedIn, mostrar)


module.exports = rutas
