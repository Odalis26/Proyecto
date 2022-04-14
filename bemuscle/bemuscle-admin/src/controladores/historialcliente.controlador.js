const historialclientectl = {}

const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

historialclientectl.mostrar = async (req, res) => {
    res.render('historialCliente/historialclienteAgregar');
}

historialclientectl.mandar = async (req, res) => {

    const id = req.user.idUsuarios
    const { lesion_ocea, lesion_muscular, enfermedad_cardiovascular, actividad_deportiva, embarazo, enfermedad } = req.body
    const nuevoHistorialCliente = {
        lesion_ocea,
        lesion_muscular,
        enfermedad_cardiovascular,
        actividad_deportiva,
        embarazo,
        enfermedad,
        usuarioIdUsuarios: id
    }
    await orm.historialCliente.create(nuevoHistorialCliente)
    req.flash('success', 'Se guardó correctamente')

    res.redirect('/historialCliente/lista/' + id);
}

historialclientectl.listar = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from historial_clientes ')
    res.render('historialCliente/historialclienteLista', { lista })

}

historialclientectl.eliminar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    await orm.historialCliente.destroy({ where: { historial_cliente_id: id } })
    req.flash('success', 'Se eliminó correctamente')
    res.redirect('/historialCliente/lista/' + ids);

}

historialclientectl.traer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from historial_clientes where historial_cliente_id = ?', [id])
    res.render('historialCliente/historialclienteEditar', { lista })
}

historialclientectl.editar = async (req, res) => {
    const ids = req.user.idUsuarios
    const id = req.params.id
    const { lesion_ocea, lesion_muscular, enfermedad_cardiovascular, actividad_deportiva, embarazo, enfermedad } = req.body
    const nuevoHistorialCliente = {
        lesion_ocea,
        lesion_muscular,
        enfermedad_cardiovascular,
        actividad_deportiva,
        embarazo,
        enfermedad
    }
    await sql.query('update historial_clientes set ? where historial_cliente_id = ?', [nuevoHistorialCliente, id])
    req.flash('success', 'Se editó correctamente')
    res.redirect('/historialCliente/lista/' + ids);
}

module.exports = historialclientectl