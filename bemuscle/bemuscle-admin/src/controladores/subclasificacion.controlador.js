const subClasificacionctl = {}

const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

subClasificacionctl.mostrar = (req, res) => {
    res.render('subClasificacion/subClasificacionAgregar');
}

subClasificacionctl.mandar = async (req, res) => {

    const id = req.user.idUsuarios
    const { nombre_sub_clasificacion, descripcion_sub_clasificacion } = req.body
    const nuevoSubClasificacion = {
        nombre_sub_clasificacion,
        descripcion_sub_clasificacion,
        usuarioIdUsuarios: id
    }
    await orm.subClasificacion.create(nuevoSubClasificacion)
    req.flash('success', 'Se guardó correctamente')

    res.redirect('/subclasificacion/lista/' + id);
}

subClasificacionctl.listar = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from sub_clasificaciones ')
    res.render('subClasificacion/subClasificacionLista', { lista })

}

subClasificacionctl.eliminar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    await orm.subClasificacion.destroy({ where: { sub_clasificacion_id: id } })
    req.flash('success', 'Se eliminó correctamente')
    res.redirect('/subclasificacion/lista/' + ids);

}

subClasificacionctl.traer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from sub_clasificaciones where sub_clasificacion_id = ?', [id])
    res.render('subClasificacion/subClasificacionEditar', { lista })
}

subClasificacionctl.editar = async (req, res) => {
    const ids = req.user.idUsuarios
    const id = req.params.id
    const { nombre_sub_clasificacion, descripcion_sub_clasificacion} = req.body
    const nuevoSubClasificacion = {
        nombre_sub_clasificacion,
        descripcion_sub_clasificacion
    }
await sql.query('update sub_clasificaciones set ? where sub_clasificacion_id = ?', [nuevoSubClasificacion,id])
    req.flash('success', 'Se editó correctamente')
    res.redirect('/subclasificacion/lista/' + ids);
}

module.exports = subClasificacionctl