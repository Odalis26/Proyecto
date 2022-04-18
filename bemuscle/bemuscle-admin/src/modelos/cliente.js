const clientes =(sequelize, type) =>{
    return sequelize.define('clientes', {
        idClientes: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: type.STRING(99),
        password: type.STRING,
        cedula: type.STRING, 
        nombre: type.STRING, 
        apellido: type.STRING, 
        edad: type.INTEGER, 
        creacionClientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionClientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = clientes