const detalleEjercicioctl ={}
const orm = require('../configuracion_base_datos/base.orm')
const sql = require('../configuracion_base_datos/base.sql')

detalleEjercicioctl.mostrar= async(req, res)=>{
    res.render('detalleEjercicio/detalleEjercicioAgregar')
}


detalleEjercicioctl.mandar = async (req, res) => {

    const id = req.user.idUsuarios
    const {  comentario } = req.body
    const nuevoDetalleEjercicio = {
        comentario
    }
    await orm.detalleEjercicio.create(nuevoDetalleEjercicio)
    req.flash('success', 'Se guardó correctamente')

    res.redirect('/detalleEjercicio/Lista/'+ id );
}

detalleEjercicioctl.listar = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('select * from detalle_ejercicios  ')
    res.render('detalleEjercicio/detalleEjercicioLista', { lista })

}


detalleEjercicioctl.eliminar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    await orm.detalleEjercicio.destroy({ where: { detalle_ejercicio_id: id } })
    req.flash('success', 'Se eliminó correctamente')
    res.redirect('/detalleEjercicio/Lista/' + ids);

}

detalleEjercicioctl.traer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from detalle_ejercicios where detalle_ejercicio_id = ?', [id])
    res.render('detalleEjercicio/detalleEjercicioEditar', { lista })

}

detalleEjercicioctl.editar = async (req, res) => {
    const ids=req.user.idUsuarios
    const id = req.params.id
    const { comentario } = req.body
    const nuevoDetalleEjercicio = {
        comentario
    }
    
    await orm.detalleEjercicio.findOne({ where: {detalle_ejercicio_id: id } })
        .then(actualizardetalleEjercicio => {
           actualizardetalleEjercicio.update(nuevoDetalleEjercicio)
            req.flash('success', 'Se editó correctamente')

            res.redirect('/detalleEjercicio/Lista/' + ids);
        })
}

module.exports = detalleEjercicioctl


