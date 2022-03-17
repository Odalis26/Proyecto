const detalle_ejercicio  = (sequelize, type)=>{
    return sequelize.define('detalle_ejercicios', {
        detalle_ejercicio_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comentario: type.STRING(1500),
        creacionDetalleEjercicio:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleEjercicio:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports = detalle_ejercicio