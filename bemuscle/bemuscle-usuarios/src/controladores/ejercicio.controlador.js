const ejercicioctl = {}

const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

ejercicioctl.mostrar = async (req, res) => {
    const clasificacicion = await sql.query('select * from clasificaciones')
    const subclasificacion = await sql.query('select * from sub_clasificaciones')

    res.render('ejercicio/ejercicioAgregar', { clasificacicion, subclasificacion });
}

ejercicioctl.mandar = async (req, res) => {
    const ids =req.params.id
    const id = req.user.idUsuarios
    const { nombre_ejercicio, descripcion, a, subclasificacion } = req.body
    const nuevoEjercicio = {
        nombre_ejercicio,
        descripcion,
        clasificacioneClasificacionId: a,
        subClasificacioneSubClasificacionId: subclasificacion,
        usuarioIdUsuarios: id,
        calificacion: ids
    }
    await orm.ejercicio.create(nuevoEjercicio)
    req.flash('success', 'Se guardó correctamente')

    res.redirect('/ejercicio/lista/' + ids);
}

ejercicioctl.listar = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from ejercicios ')
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
    const id = req.params.id
    const lista = await sql.query('select * from ejercicios where ejercicio_id = ?', [id])
    res.render('ejercicio/ejercicioEditar', { lista })
}

ejercicioctl.editar = async (req, res) => {
    const ids = req.user.idUsuarios
    const id = req.params.id
    const { nombre_ejercicio, descripcion } = req.body
    const nuevoEjercicio = {
        nombre_ejercicio,
        descripcion,
    }
    await sql.query('update ejercicios set ? where ejercicio_id = ?', [nuevoEjercicio, id])
    req.flash('success', 'Se editó correctamente')
    res.redirect('/ejercicio/lista/' + ids);
}

module.exports = ejercicioctl