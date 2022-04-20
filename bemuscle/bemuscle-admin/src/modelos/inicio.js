const inicio = (sequelize, type)=>{
    return sequelize.define('proyectos', {
        inicio_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_inicio: type.STRING,
        descripcion_inicio: type.STRING(2500),
        mision: type.STRING(2500),
        vision: type.STRING(2500),
        creacioninicio:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacioninicio:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports= inicio