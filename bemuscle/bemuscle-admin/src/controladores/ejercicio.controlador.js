const ejercicioctl = {}

const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

ejercicioctl.mostrar = (req, res) => {
    res.render('ejercicio/ejercicioAgregar');
}

ejercicioctl.mandar = async (req, res) => {

    const id = req.user.idUsuarios
    const { nombre_ejercicio, descripcion } = req.body
    const nuevoEjercicio = {
        nombre_ejercicio,
        descripcion,
        usuarioIdUsuarios: id
    }
    await orm.ejercicio.create(nuevoEjercicio)
    req.flash('success', 'Se guardó correctamente')

    res.redirect('/ejercicio/lista/' + id);
}

ejercicioctl.listar = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from ejercicios where usuarioIdUsuarios = ?', [id])
    res.render('ejercicio/ejercicioLista', { lista })

}

ejercicioctl.eliminar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    await orm.ejercicio.destroy({ where: { ejercicio_id: id } })
    req.flash('success', 'Se eliminó correctamente')
    res.redirect('/ejercicio/lista/' + ids);

}

ejercicioctl.traer = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from ejercicios where usuarioIdUsuarios = ?', [id])
    res.render('ejercicio/ejercicioEditar', { lista })

}

ejercicioctl.editar = async (req, res) => {

    const id = req.user.idUsuarios
    const { nombre_ejercicio, descripcion } = req.body
    const nuevoEjercicio = {
        nombre_ejercicio,
        descripcion,
    }
    await orm.ejercicio.findOne({ where: { ejercicio_id: id } })
        .then(actualizarEjercicio => {
            actualizarEjercicio.update(nuevodetalleEjercicio)
            req.flash('success', 'Se editó correctamente')

            res.redirect('/detalleEjercicio/lista/' + id);
        })
}

module.exports = ejercicioctl