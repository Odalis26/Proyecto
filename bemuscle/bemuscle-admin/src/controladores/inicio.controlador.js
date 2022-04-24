const inicioctl = {}
const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

inicioctl.mostrar = (req, res) => {
    res.render('inicio/inicio');
}

inicioctl.mandar = async (req, res) => {

    const id = req.user.idUsuarios
    const { nombre_proyecto,descripcion_proyecto,mision,vision, } = req.body
    const nuevoInicio = {
        nombre_proyecto,
        descripcion_proyecto,
        mision,
        vision,
        usuarioIdUsuarios: id
    }
    await orm.inicio('success', 'Se guardó correctamente')
    res.redirect('/inicio/');
}



module.exports = inicioctl