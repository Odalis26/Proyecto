const paginaPrincipalctl = {}

const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

paginaPrincipalctl.mostrar = (req, res) => {
    res.render('paginaPrincipal/paginaPrincipalInicio');
}
module.exports = paginaPrincipalctl