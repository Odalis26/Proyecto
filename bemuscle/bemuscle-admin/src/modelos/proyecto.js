const proyecto = (sequelize, type) => {
    return sequelize.define('proyectos',{
        proyecto_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_proyecto: type.STRING,
        descripcion_proyecto: type.STRING(2500),
        mision: type.STRING(2500),
        vision: type.STRING(2500),
 
        creacionProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = proyecto
