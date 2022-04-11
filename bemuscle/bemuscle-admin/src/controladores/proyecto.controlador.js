const proyectoctl = {}

const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

proyectoctl.mostrar = (req, res) => {
    res.render('proyecto/proyectoAgregar');
}

proyectoctl.mandar = async (req, res) => {

    const id = req.user.idUsuarios
    const { nombre_proyecto, descripcion_proyecto, mision, vision } = req.body
    const nuevoProyecto = {
        nombre_proyecto,
        descripcion_proyecto,
        mision,
        vision,
        usuarioIdUsuarios: id
    }
    await orm.proyecto.create(nuevoProyecto)
    req.flash('success', 'Se guardó correctamente')

    res.redirect('/proyecto/lista/' + id);
}

proyectoctl.listar = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from proyectos ')
    res.render('proyecto/proyectoLista', { lista })

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