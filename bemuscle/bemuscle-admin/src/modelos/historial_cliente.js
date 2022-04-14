const historial_cliente = (sequelize, type) => {
    return sequelize.define('historial_cliente',{
        historial_cliente_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lesion_ocea: type.STRING,
        lesion_muscular: type.STRING,
        enfermedad_cardiovascular: type.STRING,
        actividad_deportiva: type.STRING,
        embarazo: type.STRING,
        enfermedad: type.STRING,

        creacionHistorialCliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionHistorialCliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports = historial_cliente