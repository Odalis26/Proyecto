const ejercicio = (sequelize, type) => {
    return sequelize.define('ejercicios', {

        ejercicio_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_ejercicio: type.STRING,
        descripcion: type.STRING,
        calificacion: type.STRING,
        creacionEjercicio:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionEjercicio:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports = ejercicio
