const indexctl = {}
const orm = require('../configuracion_base_datos/base.orm')
const sql = require('../configuracion_base_datos/base.sql')

indexctl.mostrar = async (req, res) => {
    res.render('index')
}

indexctl.verificar = async (req, res) => {
    const clasificacion = await sql.query('select * from clasificaciones')
    if (clasificacion.length === 0) {
        const clasificaciones = clasificacion[0]
        if (clasificaciones === undefined) {
            await sql.query('insert into clasificaciones(nombre_clasificacion) values("FUERZA")')
            await sql.query('insert into clasificaciones(nombre_clasificacion) values("FLEXIBILIDAD")')
            await sql.query('insert into clasificaciones(nombre_clasificacion) values("CARDIO")')
            await sql.query('insert into clasificaciones(nombre_clasificacion) values("CROSSFIT")')
            await sql.query('insert into clasificaciones(nombre_clasificacion) values("CON PESAS")')
            await sql.query('insert into clasificaciones(nombre_clasificacion) values("DINÁMICOS")')
            await sql.query('insert into clasificaciones(nombre_clasificacion) values("FLEXIONES")')
            await sql.query('CREATE  VIEW lista_proyectos AS SELECT p.*, d.* from proyectos p JOIN detalle_proyectos d ON d.proyectoProyectoId = p.proyecto_id')
        }
    }
    const subclasificacion = await sql.query('select * from sub_clasificaciones')
    if (subclasificacion.length === 0) {
        const subclasificaciones = subclasificacion[0]
        if (subclasificaciones === undefined) {
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("BICEPS")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("GLÚTEOS")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("TRICEPS")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("ABDOMINALES")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("ADUCTORES")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("TRAPECIOS")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("PECTORALES")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("DELTOIDES")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("DORSALES")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("SOLEO")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("CUELLO")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("ISQUIOTIBIALES")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("LUMBAR")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("MASETERO")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("PSOAS")')
            await sql.query('insert into sub_clasificaciones(nombre_sub_clasificacion) values("CUADRICEPS")')
        }
    }
    const { verificacion } = req.body
    const usuario = await orm.usuario.findOne({ where: { username: verificacion } })
    if (usuario) {
        const usuarios = usuario
        if (usuarios.username == null) {
            res.redirect('/registro');
        } else {
            res.redirect('/login/' + usuarios.idUsuarios);
        }
    } else {
        res.redirect('/registro');
    }
}

module.exports = indexctl