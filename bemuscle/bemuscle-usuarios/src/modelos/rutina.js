const rutina = (sequelize, type) => {
    return sequelize.define('rutinas', {
        rutina_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        video_rutina: type.STRING,
        tiempo_rutina: type.STRING,
        descripcion: type.STRING(2500),
        progreso: type.STRING,

        creacionRutina: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRutina: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = rutina