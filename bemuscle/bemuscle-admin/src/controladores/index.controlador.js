const indexctl ={}
const orm = require('../configuracion_base_datos/base.orm')
const sql = require('../configuracion_base_datos/base.sql')


indexctl.mostrar= async(req, res)=>{
    res.render('index')
}


module.exports =indexctl