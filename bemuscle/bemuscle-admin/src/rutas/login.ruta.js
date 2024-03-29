const express = require('express');

const rutas = express.Router()

const {mostrar, mostrarRegistro, login, registro, cerrarSesion } = require('../controladores/login.controlador')

rutas.get('/login', mostrar)
rutas.post('/login', login)
rutas.get('/registro', mostrarRegistro)
rutas.post('/registro', registro)
rutas.get('/cerrarsesion', cerrarSesion)



module.exports = rutas