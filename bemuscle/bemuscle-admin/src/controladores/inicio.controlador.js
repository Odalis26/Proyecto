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

// inicioctl.listar = async (req, res) => {
//     const id = req.user.idUsuarios
//     const lista = await sql.query('select * from proyectos ')
//     res.render('inicio/', { })

// }

// inicioctl.eliminar = async (req, res) => {
//     const id = req.params.id
//     const ids = req.user.idUsuarios
//     await orm.inicio.destroy({ where: { inicio_id: id } })
//     req.flash('success', 'Se eliminó correctamente')
//     res.redirect('/inicio/');

// }

// inicioctl.traer = async (req, res) => {
//     const id = req.params.id
//     const lista = await sql.query('select * from proyectos where proyecto_id = ?', [id])
//     res.render('inicio/', { })
// }

// inicioctl.editar = async (req, res) => {
//     const ids = req.user.idUsuarios
//     const id = req.params.id
//     const { nombre_proyecto,descripcion_proyecto,mision,vision, } = req.body
//     const nuevoProyecto = {
//         nombre_proyecto,
//         descripcion_proyecto,
//         mision,
//         vision,
//     }
//     await sql.query('update proyectos set ? where inicio_id = ?', [nuevoInicio, id])
//     req.flash('success', 'Se editó correctamente')
//     res.redirect('/inicio/');
// }

module.exports = inicioctl