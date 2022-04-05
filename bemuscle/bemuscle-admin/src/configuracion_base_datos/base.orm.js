const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "bemuscle";

mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
}).then(connection => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
    console.info("Base de datos creada o comprobada correctamente");
  })
})

const usuarioModelo = require('../modelos/usuario')
const clasificacionModelo = require('../modelos/clasificacion')
const detalleEjercicioModelo = require('../modelos/detalle_ejercicio')
const detalleRutinaModelo = require('../modelos/detalle_rutina')
const ejercicioModelo = require('../modelos/ejercicio')
const historialClienteModelo = require('../modelos/historial_cliente')
const rutinaModelo = require('../modelos/rutina')
const subClasificacionModelo = require('../modelos/sub_clasificacion')

const sequelize = new Sequelize(
  'bemuscle',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })


const usuario = usuarioModelo(sequelize, Sequelize)
const clasificacion= clasificacionModelo(sequelize, Sequelize)
const detalleEjercicio= detalleEjercicioModelo(sequelize, Sequelize)
const detalleRutina= detalleRutinaModelo(sequelize, Sequelize)
const ejercicio= ejercicioModelo(sequelize, Sequelize)
const historialCliente= historialClienteModelo(sequelize, Sequelize)
const rutina= rutinaModelo(sequelize, Sequelize)
const subClasificacion= subClasificacionModelo(sequelize, Sequelize)

usuario.hasMany(ejercicio)
ejercicio.belongsTo(usuario)
usuario.hasMany(rutina)
rutina.belongsTo(usuario)
usuario.hasMany(historialCliente)
historialCliente.belongsTo(usuario)
ejercicio.hasMany(rutina)
rutina.belongsTo(ejercicio)
clasificacion.hasMany(ejercicio)
ejercicio.belongsTo(clasificacion)
ejercicio.hasMany(historialCliente)
historialCliente.belongsTo(ejercicio)
ejercicio.hasMany(detalleEjercicio)
detalleEjercicio.belongsTo(ejercicio)
rutina.hasMany(detalleRutina)
detalleRutina.belongsTo(rutina)
clasificacion.hasMany(subClasificacion)
subClasificacion.belongsTo(clasificacion)
subClasificacion.hasMany(ejercicio)
ejercicio.belongsTo(subClasificacion)


  module.exports = {
    usuario,
    clasificacion,
    detalleEjercicio,
    detalleRutina,
    ejercicio,
    historialCliente,
    rutina,
    subClasificacion
  }