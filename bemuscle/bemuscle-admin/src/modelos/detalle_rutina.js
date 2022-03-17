const detalle_rutina = (sequelize, type)=>{
    return sequelize.define('detalle_rutinas',{
        detalle_rutina_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        consejos: type.STRING(1500),
        creacionDetalleRutina:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleRutina:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports = detalle_rutina