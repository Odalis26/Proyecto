const clasificacionctl = {}

const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

clasificacionctl.mostrar = (req, res) => {
    res.render('clasificacion/clasificacionAgregar');
}

clasificacionctl.mandar = async (req, res) => {
    const ids =req.params.id
    const id = req.user.idUsuarios
    const { nombre_clasificacion, descripcion_clasificacion} = req.body
    const nuevoClasificacion = {
        nombre_clasificacion,
        descripcion_clasificacion,
        usuarioIdUsuarios: id,
        ejercicioEjercicioId: ids
    }
    await orm.clasificacion.create(nuevoClasificacion)
    req.flash('success', 'Se guardó correctamente')
    res.redirect('/clasificacion/lista/' + ids);
}

clasificacionctl.listar = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from clasificaciones ')
    res.render('clasificacion/clasificacionLista', { lista })

}

clasificacionctl.eliminar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    await orm.clasificacion.destroy({ where: { clasificacion_id: id } })
    req.flash('success', 'Se eliminó correctamente')
    res.redirect('/clasificacion/lista/' + ids);

}

clasificacionctl.traer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from clasificaciones where clasificacion_id = ?', [id])
    res.render('clasificacion/clasificacionEditar', { lista })
}

clasificacionctl.editar = async (req, res) => {
    const ids = req.user.idUsuarios
    const id = req.params.id
    const { nombre_clasificacion, descripcion_clasificacion} = req.body
    const nuevoClasificacion = {
        nombre_clasificacion,
        descripcion_clasificacion
    }
await sql.query('update clasificaciones set ? where clasificacion_id = ?', [nuevoClasificacion,id])
    req.flash('success', 'Se editó correctamente')
    res.redirect('/clasificacion/lista/' + ids);
}

module.exports = clasificacionctl