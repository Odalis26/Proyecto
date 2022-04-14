const detalleProyecto = (sequelize, type) => {
    return sequelize.define('detalle_proyectos',{
        detalle_proyecto_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        objetivo: type.STRING(2500),

        creacionDetalleProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detalleProyecto 
