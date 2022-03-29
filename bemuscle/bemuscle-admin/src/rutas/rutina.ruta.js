const express = require('express');
const rutas = express.Router()

const {mostrar,  mandar, listar, eliminar, traer, editar}= require('../controladores/rutina.controlador')
const {isLoggedIn} = require('../lib/auth')
rutas.get('/Agregar/', isLoggedIn, mostrar)
rutas.post('/Agregar/', isLoggedIn, mandar)
rutas.get('/Lista/:id', isLoggedIn, listar)
rutas.get('/Eliminar/:id', isLoggedIn, eliminar)
rutas.get('/Editar/:id', isLoggedIn, traer)
rutas.post('/Editar/:id', isLoggedIn, editar)

module.exports = rutas




