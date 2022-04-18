const clasificacion = (sequelize, type)=>{
    return sequelize.define('clasificaciones', {
        clasificacion_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_clasificacion: type.STRING,
        descripcion_clasificacion: type.STRING(2500),
        creacionClasificacion:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionClasificacion:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports= clasificacion 