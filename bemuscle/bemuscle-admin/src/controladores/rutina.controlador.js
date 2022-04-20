const rutinactl = {}

const orm = require('../configuracion_base_datos/base.orm')

const sql = require('../configuracion_base_datos/base.sql')

rutinactl.mostrar = (req, res) => {
    res.render('rutina/rutinaAgregar');
}

rutinactl.mandar = async (req, res) => {

    const id = req.user.idUsuarios
    const { video_rutina, tiempo_rutina, descripcion, progreso } = req.body
    const nuevaRutina = {
        video_rutina,
        tiempo_rutina,
        descripcion,
        progreso,
        usuarioIdUsuarios: id
    }
    await orm.rutina.create(nuevaRutina)
    req.flash('success', 'Se guardó correctamente')

    res.redirect('/rutina/lista/' + id);
}

rutinactl.listar = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from rutinas ')
    res.render('rutina/rutinaLista', { lista })

}

rutinactl.eliminar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    await orm.rutina.destroy({ where: { rutina_id: id } })
    req.flash('success', 'Se eliminó correctamente')
    res.redirect('/rutina/lista/' + ids);

}

rutinactl.traer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from rutinas where rutina_id = ?', [id])
    res.render('rutina/rutinaEditar', { lista })
}

rutinactl.editar = async (req, res) => {
    const ids = req.user.idUsuarios
    const id = req.params.id
    const { video_rutina, tiempo_rutina, descripcion, progreso } = req.body
    const nuevaRutina = {
        video_rutina,
        tiempo_rutina,
        descripcion,
        progreso,
    }
    await sql.query('update rutinas set ? where rutina_id = ?', [nuevaRutina, id])
    req.flash('success', 'Se editó correctamente')
    res.redirect('/rutina/lista/' + ids);
}

module.exports = rutinactl