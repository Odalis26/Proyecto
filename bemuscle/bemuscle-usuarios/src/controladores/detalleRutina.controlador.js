const detalleRutinactl = {}

const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

detalleRutinactl.mostrar = async(req, res) => {
    res.render('detalleRutina/detalleRutinaAgregar');
}

detalleRutinactl.mandar = async (req, res) => {
    console.log(req)
    const idss =req.params.id
    const id = req.user.idUsuarios
    const { consejos} = req.body
    const nuevoDetalleRutina = {
        consejos,
        usuarioIdUsuarios: id,
        rutinaRutinaId: idss
    }
    await orm.detalleRutina.create(nuevoDetalleRutina)
    

    req.flash('success', 'Se guardó correctamente')


    res.redirect('/detalleRutina/lista/' + idss);
}

detalleRutinactl.listar = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from detalle_rutinas ')
    res.render('detalleRutina/detalleRutinaLista', { lista })

}

detalleRutinactl.eliminar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    await orm.detalleRutina.destroy({ where: { detalle_rutina_id: id } })
    req.flash('success', 'Se eliminó correctamente')
    res.redirect('/detalleRutina/lista/' + ids);

}

detalleRutinactl.traer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from detalle_rutinas where detalle_rutina_id = ?', [id])
    res.render('detalleRutina/detalleRutinaEditar', { lista })
}

detalleRutinactl.editar = async (req, res) => {
    const ids = req.user.idUsuarios
    const id = req.params.id
    const { consejos} = req.body
    const nuevoDetalleRutina = {
        consejos,
    }
await sql.query('update detalle_rutinas set ? where detalle_rutina_id = ?', [nuevoDetalleRutina,id])
    req.flash('success', 'Se editó correctamente')
    res.redirect('/detalleRutina/lista/' + ids);
}

module.exports = detalleRutinactl