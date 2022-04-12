const proyectoctl = {}

const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

proyectoctl.mostrar = async(req, res) => {
    const lista = await sql.query('select MAX(proyecto_id)from proyectos ')
    res.render('proyecto/proyectoAgregar', {lista});
}

proyectoctl.mandar = async (req, res) => {

    const id = req.user.idUsuarios
    const { nombre_proyecto, descripcion_proyecto, mision, vision, objetivos, numero } = req.body
    const nuevoProyecto = {
        nombre_proyecto,
        descripcion_proyecto,
        mision,
        vision,
        usuarioIdUsuarios: id
    }
    await orm.proyecto.create(nuevoProyecto)
    for (let i = 0; i < objetivos.length; i++) {
        await sql.query('insert into detalle_proyectos(objetivo, proyectoProyectoId) values(?,?)', [objetivos[i], numero])
    }
    req.flash('success', 'Se guardó correctamente')

    res.redirect('/proyecto/lista/' + id);
}

proyectoctl.listar = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from proyectos')
    const listaDetalle = await sql.query('select * from detalle_proyectos')
    res.render('proyecto/proyectoLista', { lista, listaDetalle })

}

proyectoctl.eliminar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    await orm.proyecto.destroy({ where: { proyecto_id: id } })
    req.flash('success', 'Se eliminó correctamente')
    res.redirect('/proyecto/lista/' + ids);

}

proyectoctl.traer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from proyectos where proyecto_id = ?', [id])
    res.render('proyecto/proyectoEditar', { lista })
}

proyectoctl.editar = async (req, res) => {
    const ids = req.user.idUsuarios
    const id = req.params.id
    const { nombre_proyecto, descripcion_proyecto, mision, vision } = req.body
    const nuevoProyecto = {
        nombre_proyecto,
        descripcion_proyecto,
        mision,
        vision,
        usuarioIdUsuarios: id
    }
    await sql.query('update proyectos set ? where proyecto_id = ?', [nuevoProyecto, id])
    req.flash('success', 'Se editó correctamente')
    res.redirect('/proyecto/lista/' + ids);
}

module.exports = proyectoctl