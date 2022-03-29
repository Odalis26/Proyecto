const express = require('express');
const rutas = express.Router()

const {mostrar, mandar, listar, eliminar, traer, editar} = require('../controladores/rutina.controlador')

const {isLoggedIn} = require('../lib/auth')

rutas.get('/agregar/', isLoggedIn, mostrar)
rutas.post('/agregar/', isLoggedIn, mandar)
rutas.get('/lista/:id', isLoggedIn, listar)
rutas.get('/eliminar/:id', isLoggedIn, eliminar)
rutas.get('/editar/:id', isLoggedIn, traer)
rutas.post('/editar/:id', isLoggedIn, editar)

module.exports = rutas