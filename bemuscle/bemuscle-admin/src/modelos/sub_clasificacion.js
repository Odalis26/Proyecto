const sub_clasificacion = (sequelize, type) => {
    return sequelize.define('sub_clasificaciones', {
        sub_clasificacion_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_sub_clasificacion: type.INTEGER,
        creacionSubClasificacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionSubClasificacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = sub_clasificacion